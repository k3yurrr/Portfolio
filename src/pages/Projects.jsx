import { useEffect } from "react";
import ProjectBox from "../components/ProjectBox";
import portfolioData from "../data/portfolioData";
import {
  updatePageMeta,
  seoData,
  generateProjectStructuredData,
} from "../utils/seo";

const Projects = () => {
  useEffect(() => {
    updatePageMeta(seoData.projects);

    // Add structured data for projects
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(
      generateProjectStructuredData(portfolioData[0].projects)
    );
    document.head.appendChild(script);

    return () => {
      // Clean up structured data on unmount
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((script) => {
        if (script.textContent.includes("ItemList")) {
          script.remove();
        }
      });
    };
  }, []);

  return (
    <>
      <main className="mx-auto max-w-3xl xs:px-4 md:px-8 py-6 items-center">
        <h1 className="font-calistoga xs:text-3xl md:text-5xl">my projects.</h1>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {portfolioData[0].projects.map((project, idx) => (
            <ProjectBox key={idx} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
