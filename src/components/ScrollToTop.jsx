import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`fixed bottom-20 z-50 lg:right-10 xs:right-5 ${
          isVisible ? "visible" : "invisible"
        }`}
      >
        <button
          className="bg-[var(--light-border)] dark:bg-[var(--dark-border)] hover:bg-[var(--light-border)]/50 hover:dark:bg-[var(--dark-border)]/50 text-[var(--light-text)] dark:text-[var(--dark-text)] cursor-pointer rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
          onClick={scrollToTop}
        >
          <FaChevronUp />
        </button>
      </div>
    </>
  );
};

export default ScrollToTop;
