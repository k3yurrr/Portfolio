import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="mx-auto max-w-3xl xs:px-4 md:px-8 py-6 pt-12 pb-32">
        <footer className="flex xs:flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
          <p className="text-center text-xs">
            &copy; {year} Keyur Parmar |{" "}
            <Link
              to="/privacy"
              className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)] font-bold"
            >
              privacy?
            </Link>
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="https://www.linkedin.com/in/keyur-parmar-661447282/"
              aria-label="Keyur Parmar linkedin account"
            >
              <FiLinkedin className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)]" />
            </Link>
            <Link
              to="https://github.com/k3yurrr"
              aria-label="Keyur Parmar github account"
            >
              <FiGithub className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)]" />
            </Link>
            <Link
              to="mailto:Keyurparmar182003@gmail.com"
              aria-label="Keyur Parmar gmail account"
            >
              <FiMail className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)]" />
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
