// SEO utility functions for dynamic meta tag management
export const updatePageMeta = ({
  title = "Pushkar Sharma - MERN Stack Developer",
  description = "MERN Stack Developer specializing in React, Node.js, MongoDB, and Express. Building scalable web applications with modern technologies.",
  keywords = "Pushkar Sharma, MERN Developer, React, Node.js, Portfolio",
  image = "https://push4ck.site/Pushkar.webp",
  url = "https://push4ck.site",
  type = "website",
}) => {
  // Update document title
  document.title = title;

  // Update or create meta tags
  const updateMetaTag = (name, content, property = false) => {
    const selector = property
      ? `meta[property="${name}"]`
      : `meta[name="${name}"]`;
    let element = document.querySelector(selector);

    if (!element) {
      element = document.createElement("meta");
      if (property) {
        element.setAttribute("property", name);
      } else {
        element.setAttribute("name", name);
      }
      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  // Update basic meta tags
  updateMetaTag("description", description);
  updateMetaTag("keywords", keywords);

  // Update Open Graph tags
  updateMetaTag("og:title", title, true);
  updateMetaTag("og:description", description, true);
  updateMetaTag("og:image", image, true);
  updateMetaTag("og:url", url, true);
  updateMetaTag("og:type", type, true);

  // Update Twitter tags
  updateMetaTag("twitter:title", title, true);
  updateMetaTag("twitter:description", description, true);
  updateMetaTag("twitter:image", image, true);

  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", url);
};

// Predefined SEO data for different pages
export const seoData = {
  home: {
    title: "Pushkar Sharma - MERN Stack Developer | Full-Stack Web Developer",
    description:
      "Pushkar Sharma is a skilled MERN Stack Developer from India with expertise in React, Node.js, MongoDB, and Express. Passionate about building scalable web applications and modern UI/UX designs.",
    keywords:
      "Pushkar Sharma, MERN Developer, Full Stack Developer, React Developer, Node.js, MongoDB, Express, JavaScript, Web Development, Portfolio",
    url: "https://push4ck.site/",
  },
  projects: {
    title: "Projects - Pushkar Sharma | MERN Stack Developer Portfolio",
    description:
      "Explore Pushkar Sharma's portfolio of MERN stack projects including URLzy, CodeProbe, UIstack, and more. See live demos and source code of full-stack web applications.",
    keywords:
      "Pushkar Sharma Projects, React Projects, Node.js Projects, MERN Stack Projects, Web Development Portfolio, URLzy, CodeProbe, UIstack",
    url: "https://push4ck.site/projects",
  },
  contact: {
    title: "Contact Pushkar Sharma - MERN Stack Developer | Get In Touch",
    description:
      "Get in touch with Pushkar Sharma for MERN stack development projects. Available for freelance work, collaborations, and full-time opportunities.",
    keywords:
      "Contact Pushkar Sharma, Hire MERN Developer, React Developer Contact, Full Stack Developer Hire, Web Development Services",
    url: "https://push4ck.site/contact",
  },
  privacy: {
    title: "Privacy Policy - Pushkar Sharma Portfolio",
    description:
      "Privacy policy for Pushkar Sharma's portfolio website. Learn about data collection, usage, and protection practices.",
    keywords:
      "Privacy Policy, Pushkar Sharma, Data Protection, Website Privacy",
    url: "https://push4ck.site/privacy",
  },
};

// Generate structured data for projects
export const generateProjectStructuredData = (projects) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pushkar Sharma's Projects",
    description: "A collection of MERN stack projects by Pushkar Sharma",
    itemListElement: projects.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      url: project.live,
      image: project.image,
      author: {
        "@type": "Person",
        name: "Pushkar Sharma",
      },
      keywords: project.tech?.join(", "),
      genre: "Web Application",
    })),
  };
};
