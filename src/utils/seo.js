// ─── Constants ────────────────────────────────────────────────────────────────
const SITE_URL = "https://k3yur.in";
const SITE_NAME = "Keyur Parmar";
const DEFAULT_IMAGE = "https://k3yur.in/og-image.jpg"; // create a 1200×630 branded image and place in /public
const TWITTER_HANDLE = "@k3yurrr";

// ─── Per-Page SEO Data ────────────────────────────────────────────────────────
export const seoData = {
  home: {
    title: "Keyur Parmar — Cyber Security Analyst | SOC & Threat Research",
    description:
      "Keyur Parmar is a Cyber Security Analyst specializing in SOC operations, threat research, vulnerability assessment, and incident response. Based in Gujarat, India.",
    keywords:
      "Keyur Parmar, Cyber Security Analyst, SOC Analyst, Threat Research, Vulnerability Assessment, Incident Response, Security Engineer, Gujarat India, Cybersecurity Portfolio",
    url: SITE_URL,
    image: DEFAULT_IMAGE,
  },
  projects: {
    title: "Projects — Keyur Parmar | Cybersecurity Tools & Research",
    description:
      "Explore cybersecurity projects by Keyur Parmar — including security automation tools, threat analysis research, and full-stack security applications.",
    keywords:
      "Keyur Parmar Projects, Cybersecurity Projects, Security Tools, SOC Projects, Security Automation, Threat Analysis, URLzy, CodeProbe",
    url: `${SITE_URL}/projects`,
    image: DEFAULT_IMAGE,
  },
  contact: {
    title: "Contact — Keyur Parmar | Let's Work Together",
    description:
      "Get in touch with Keyur Parmar for cybersecurity collaborations, job opportunities, or project discussions. Based in Gujarat, India. Responds within 24 hours.",
    keywords:
      "Contact Keyur Parmar, Hire Cyber Security Analyst, SOC Analyst, Red Teaming, Security Consultant, Gujarat India",
    url: `${SITE_URL}/contact`,
    image: DEFAULT_IMAGE,
  },
  privacy: {
    title: "Privacy Policy — Keyur Parmar Portfolio",
    description:
      "Privacy policy for k3yur.in — how data is collected, stored, and protected on Keyur Parmar's portfolio website.",
    keywords: "Privacy Policy, k3yur.in, Keyur Parmar, Data Protection",
    url: `${SITE_URL}/privacy`,
    image: DEFAULT_IMAGE,
  },
};

// ─── Update All Page Meta Tags ────────────────────────────────────────────────
export const updatePageMeta = ({ title, description, keywords, image, url }) => {
  const resolvedImage = image || DEFAULT_IMAGE;
  const resolvedUrl = url || SITE_URL;

  // Basic
  document.title = title;
  setMeta("description", description);
  setMeta("keywords", keywords);
  setMeta("author", "Keyur Parmar");
  setMeta("robots", "index, follow");
  setMeta("theme-color", "#3b82f6");

  // Canonical
  setLink("canonical", resolvedUrl);

  // Open Graph
  setOg("og:type", "website");
  setOg("og:site_name", SITE_NAME);
  setOg("og:title", title);
  setOg("og:description", description);
  setOg("og:url", resolvedUrl);
  setOg("og:image", resolvedImage);
  setOg("og:image:width", "1200");
  setOg("og:image:height", "630");
  setOg("og:image:alt", `${SITE_NAME} — Cyber Security Analyst`);
  setOg("og:locale", "en_IN");

  // Twitter Card
  setOg("twitter:card", "summary_large_image");
  setOg("twitter:site", TWITTER_HANDLE);
  setOg("twitter:creator", TWITTER_HANDLE);
  setOg("twitter:title", title);
  setOg("twitter:description", description);
  setOg("twitter:image", resolvedImage);
  setOg("twitter:image:alt", `${SITE_NAME} — Cyber Security Analyst`);
};

// ─── DOM Helpers ──────────────────────────────────────────────────────────────
const setMeta = (name, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setOg = (property, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setLink = (rel, href) => {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

// ─── Structured Data Helpers ──────────────────────────────────────────────────
const injectJSON = (data, id) => {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

const removeJSON = (id) => {
  const script = document.getElementById(id);
  if (script) script.remove();
};

// ─── Person Structured Data ───────────────────────────────────────────────────
export const generatePersonStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Keyur Parmar",
  url: SITE_URL,
  image: DEFAULT_IMAGE,
  jobTitle: "Cyber Security Analyst",
  description:
    "Cyber Security Analyst specializing in SOC operations, threat research, vulnerability assessment, and incident response.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  email: "keyurparmar182003@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/keyur-parmar-661447282/",
    "https://github.com/k3yurrr",
    "https://tryhackme.com/p/k3yurrr",
    "https://medium.com/@k3yurrr",
  ],
  knowsAbout: [
    "Cyber Security",
    "SOC Operations",
    "Threat Research",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Incident Response",
    "SIEM",
    "Red Teaming",
  ],
});

// ─── WebSite Structured Data ──────────────────────────────────────────────────
export const generateWebsiteStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Portfolio of Keyur Parmar, Cyber Security Analyst specializing in SOC operations and threat research.",
  author: {
    "@type": "Person",
    name: "Keyur Parmar",
  },
});

// ─── Project List Structured Data ────────────────────────────────────────────
export const generateProjectStructuredData = (projects) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Keyur Parmar — Cybersecurity Projects",
  url: `${SITE_URL}/projects`,
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "CreativeWork",
      name: project.title,
      description: project.description,
      url: project.live || project.github || SITE_URL,
      image: project.image,
      author: {
        "@type": "Person",
        name: "Keyur Parmar",
      },
      keywords: project.tech?.join(", "),
    },
  })),
});

// ─── Inject / Remove Structured Data ─────────────────────────────────────────
export const injectPersonData = () =>
  injectJSON(generatePersonStructuredData(), "sd-person");

export const injectWebsiteData = () =>
  injectJSON(generateWebsiteStructuredData(), "sd-website");

export const injectProjectsData = (projects) => {
  injectJSON(generateProjectStructuredData(projects), "sd-projects");
  return () => removeJSON("sd-projects");
};