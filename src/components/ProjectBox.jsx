import { Link } from "react-router-dom";
import { FiGlobe, FiGithub } from "react-icons/fi";
// thumbnails hidden by request

const ProjectBox = ({ project }) => {
  const handleExternalLink = (url) => (event) => {
    event.preventDefault();
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl flex flex-col overflow-hidden">
        {/* project thumbnail intentionally hidden */}
        <div className="md:p-6 xs:p-3">
          <h1 className="md:text-xl font-semibold my-1 line-clamp-1 xs:text-md">
            {project.title}
          </h1>
          <p className="md:text-base text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] line-clamp-2 xs:text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 my-4">
            {project.tech?.map((tech, idx) => (
              <span
                key={idx}
                className="bg-[var(--light-border)] dark:bg-[var(--dark-border)] text-[var(--light-text)] dark:text-[var(--dark-text)] px-1 py-0.5 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {project.live && (
              <Link
                to={project.live}
                onClick={handleExternalLink(project.live)}
                className="bg-[var(--light-card)] dark:bg-[var(--dark-card)] text-[var(--light-text)] dark:text-[var(--dark-text)] hover:bg-[var(--light-border)] dark:hover:bg-[var(--dark-border)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] px-2 py-1 rounded-md flex items-center gap-2 text-xs"
                aria-label="click on globe icon button for project live preview"
              >
                <FiGlobe /> live
              </Link>
            )}
            {project.github && (
              <Link
                to={project.github}
                onClick={handleExternalLink(project.github)}
                className="bg-[var(--light-card)] dark:bg-[var(--dark-card)] text-[var(--light-text)] dark:text-[var(--dark-text)] hover:bg-[var(--light-border)] dark:hover:bg-[var(--dark-border)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] px-2 py-1 rounded-md flex items-center gap-2 text-xs"
                aria-label="click on github icon button for project source code"
              >
                <FiGithub /> code
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
