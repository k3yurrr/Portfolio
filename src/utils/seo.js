// SEO utility functions for dynamic meta tag management
export const updatePageMeta = ({
  title = "Keyur Parmar - Front-End Developer",
  description = "Cyber Security Analyst specializing in SOC & Threat Research. MSc in Cyber Security.",
  keywords = "Keyur Parmar, Cyber Security Analyst, SOC, Threat Research, MSc Cyber Security",
  image = "https://push4ck.site/keyur.png",
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
    title: "Keyur Parmar - Front-End Developer | Full-Stack Web Developer",
    description:
      "Keyur Parmar is a skilled Front-End Developer from India with expertise in React, JavaScript, HTML, and CSS. Passionate about building modern web applications and responsive UI/UX designs.",
    keywords:
      "Keyur Parmar, Front-End Developer, React Developer, JavaScript, HTML, CSS, Web Development, Portfolio",
    url: "https://push4ck.site/",
  },
  projects: {
    title: "Projects - Keyur Parmar | Front-End Developer Portfolio",
    description:
      "Explore Keyur Parmar's portfolio of Front-End projects including URLzy, CodeProbe, UIstack, and more. See live demos and source code of modern web applications.",
    keywords:
      "Keyur Parmar Projects, React Projects, JavaScript Projects, Front-End Projects, Web Development Portfolio, URLzy, CodeProbe, UIstack",
    url: "https://push4ck.site/projects",
  },
  contact: {
    title: "Contact Keyur Parmar - Front-End Developer | Get In Touch",
    description:
      "Get in touch with Keyur Parmar for Front-End development projects. Available for freelance work, collaborations, and full-time opportunities.",
    keywords:
      "Contact Keyur Parmar, Hire Front-End Developer, React Developer Contact, Full Stack Developer Hire, Web Development Services",
    url: "https://push4ck.site/contact",
  },
  privacy: {
    title: "Privacy Policy - Keyur Parmar Portfolio",
    description:
      "Privacy policy for Keyur Parmar's portfolio website. Learn about data collection, usage, and protection practices.",
    keywords:
      "Privacy Policy, Keyur Parmar, Data Protection, Website Privacy",
    url: "https://push4ck.site/privacy",
  },
};

// Generate structured data for projects
export const generateProjectStructuredData = (projects) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Keyur Parmar's Projects",
    description: "A collection of Front-End projects by Keyur Parmar",
    itemListElement: projects.map((project, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: project.title,
      description: project.description,
      url: project.live,
      image: project.image,
      author: {
        "@type": "Person",
        name: "Keyur Parmar",
      },
      keywords: project.tech?.join(", "),
      genre: "Web Application",
    })),
  };
};
