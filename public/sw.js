const CACHE_NAME = "pushkar-portfolio-v1";
const urlsToCache = [
  "/",
  "/projects",
  "/contact",
  "/privacy",
  "/Pushkar.webp",
  "/Push4ck.png",
  "/assets/projectImages/UIstack.webp",
  "/assets/projectImages/CodeProbe.webp",
  "/assets/projectImages/HCVAcademy.webp",
  "/assets/projectImages/CodeArc.webp",
  "/assets/projectImages/PushkarCode.webp",
  "/assets/projectImages/URLzy.webp",
];

// Install service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event with cache-first strategy for images, network-first for HTML
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version if available
      if (response) {
        return response;
      }

      // Clone the request
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Update service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
