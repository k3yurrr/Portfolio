import { useEffect } from "react";
import { Link } from "react-router-dom";
import { TbFileDownload } from "react-icons/tb";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Resume from "../data/Keyur_resume.pdf";
import Tabs from "../components/Tabs";
import { TbArrowRight } from "react-icons/tb";
import ProjectBox from "../components/ProjectBox";
import portfolioData from "../data/portfolioData";
import BlogBox from "../components/BlogBox";
import OptimizedImage from "../components/OptimizedImage";
import { updatePageMeta, seoData } from "../utils/seo";

const HomePage = () => {
  useEffect(() => {
    updatePageMeta(seoData.home);
  }, []);

  return (
    <>
      <main
        role="main"
        className="flex flex-col gap-16 pb-16 mx-auto max-w-3xl xs:px-4 md:px-8 py-6 items-center"
      >
        {/* about */}
        <section
          aria-label="About Keyur Parmar"
          className="flex xs:flex-col xs:justify-center xs:items-center lg:flex-row xs:space-y-8 gap-12 xs:gap-4"
        >
          <div className="mt-8 w-fit">
            <h1 className="font-calistoga text-6xl leading-tight">
              Hi, {portfolioData[0].About.name} here!
            </h1>
            <p className="mt-4">
              {/* {portfolioData[0].About.age}yo {portfolioData[0].About.role} from{" "}
              {portfolioData[0].About.location} */}
              {portfolioData[0].About.heading}
            </p>
            <p className="my-2">{portfolioData[0].About.subHeading}</p>
            <p className="mb-6">{portfolioData[0].About.intro}</p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="w-fit">
                <Link
                  to={Resume}
                  target="_blank"
                  className="flex items-center gap-2 font-semibold border-2 rounded-md px-4 py-2 h-9 hover:bg-[var(--light-border)] hover:dark:bg-[var(--dark-border)]"
                >
                  Resume <TbFileDownload size={20} />
                </Link>
              </div>
              <div className="w-fit flex items-center gap-4 sm:gap-6">
                <Link
                  to="https://www.linkedin.com/in/push4ck/"
                  aria-label="Keyur Parmar linkedin account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLinkedin
                    size={20}
                    className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)]"
                  />
                </Link>
                <Link
                  to="https://github.com/Push4ck"
                  aria-label="Keyur Parmar github account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub
                    size={20}
                    className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)]"
                  />
                </Link>
                <Link
                  to="mailto:push4ck@gmail.com"
                  aria-label="Keyur Parmar gmail account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiMail
                    size={20}
                    className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)]"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-fit flex items-center justify-center">
            <OptimizedImage
              src={portfolioData[0].About.photo}
              alt="Keyur Parmar profile picture"
              className="xs:w-64 md:w-72 xl:w-84 rounded-xl object-cover"
              priority={true}
            />
          </div>
        </section>

        {/* work & education */}
        <section
          aria-label="Work experience and education"
          className="w-full flex justify-center"
        >
          <div className="max-w-3xl w-full xs:px-4 md:px-8">
            <Tabs />
          </div>
        </section>

        {/* projects */}
        <section aria-label="Featured projects">
          <div className="flex justify-between items-center">
            <h1 className="font-calistoga xs:text-xl md:text-3xl">
              featured projects
            </h1>
            <Link
              to="/projects"
              className="flex items-center gap-2 text-sm text-[var(--light-text-secondary)] hover:text-[var(--light-text)] dark:text-[var(--dark-text-secondary)] hover:dark:text-[var(--dark-text)]"
            >
              view more <TbArrowRight size={20} />
            </Link>
          </div>
          <div className="grid xs:grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {portfolioData[0].projects.slice(0, 2).map((project, idx) => (
              <ProjectBox key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* blogs */}
        <section aria-label="Recent blog posts">
          <div className="flex justify-between items-center">
            <h1 className="font-calistoga xs:text-xl md:text-3xl">
              recent blogs
            </h1>
            <Link
              to="https://cyberhub.hashnode.dev/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-[var(--light-text-secondary)] hover:text-[var(--light-text)] dark:text-[var(--dark-text-secondary)] hover:dark:text-[var(--dark-text)]"
            >
              view more <TbArrowRight size={20} />
            </Link>
          </div>
          <div className="border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] rounded-xl gap-6 mt-6">
            {portfolioData[0].blogs.slice(0, 4).map((blog, idx, arr) => (
              <BlogBox
                key={idx}
                blog={blog}
                withBorder={idx < arr.length - 1}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
