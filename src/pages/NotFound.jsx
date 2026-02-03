import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { updatePageMeta } from "../utils/seo";

const NotFound = () => {
  useEffect(() => {
    updatePageMeta({
      title: "404 - Page Not Found | Keyur Parmar Portfolio",
      description:
        "Sorry, the page you're looking for doesn't exist. Return to Keyur Parmar's portfolio homepage.",
      url: window.location.href,
    });
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[var(--light-background)] dark:bg-[var(--dark-background)]">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mb-8 text-center lg:text-left">
          <h1 className="xs:text-6xl lg:text-8xl font-bold text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)]">
            404
          </h1>
          <div className="xs:hidden lg:block w-20 lg:w-px h-px lg:h-20 bg-[var(--light-border)] dark:bg-[var(--dark-border)]"></div>
          <div>
            <h2 className="xs:text-2xl lg:text-3xl font-bold text-[var(--light-text)] dark:text-[var(--dark-text)] mb-2">
              cannot find <span className="italic">page</span>...
            </h2>
            <p className="text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] text-sm md:text-base">
              Maybe I renamed or deleted the page{" "}
              <span className="italic">oops</span>. Try again{" "}
              <span className="italic">later</span>.
            </p>
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[var(--light-text-secondary)] dark:text-[var(--dark-text-secondary)] hover:text-[var(--light-text)] dark:hover:text-[var(--dark-text)] transition-colors duration-200 text-sm md:text-base"
        >
          <ArrowLeft size={20} />
          back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
