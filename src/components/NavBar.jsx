import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";

const NavBar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header role="banner" className="mx-auto max-w-3xl xs:px-4 md:px-8 py-6">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="flex items-center justify-between"
        >
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[var(--light-text)] dark:text-[var(--dark-text)] rounded-md"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden lg:flex items-center gap-4 sm:gap-6">
            <Link
              to="/"
              className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)] font-semibold rounded px-2 py-1"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              home
            </Link>
            <Link
              to="/projects"
              className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)] font-semibold rounded px-2 py-1"
              aria-current={
                location.pathname === "/projects" ? "page" : undefined
              }
            >
              projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-[var(--light-text-secondary)] dark:hover:text-[var(--dark-text-secondary)] font-semibold rounded px-2 py-1"
              aria-current={
                location.pathname === "/contact" ? "page" : undefined
              }
            >
              contact
            </Link>
          </div>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            className="p-2 rounded-lg bg-[var(--light-card)] dark:bg-[var(--dark-card)] text-[var(--light-text)] dark:text-[var(--dark-text)] hover:bg-[var(--light-border)] dark:hover:bg-[var(--dark-border)] border-2 border-[var(--light-border)] dark:border-[var(--dark-border)] transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>

        {isMenuOpen && (
          <div id="mobile-menu" className="flex flex-col gap-4 mt-4 lg:hidden">
            <Link
              to="/"
              onClick={toggleMenu}
              className="font-semibold rounded px-2 py-1"
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              home
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className="font-semibold rounded px-2 py-1"
              aria-current={
                location.pathname === "/projects" ? "page" : undefined
              }
            >
              projects
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className="font-semibold rounded px-2 py-1"
              aria-current={
                location.pathname === "/contact" ? "page" : undefined
              }
            >
              contact
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
