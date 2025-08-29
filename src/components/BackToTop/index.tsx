import React, { useState, useEffect } from "react";
import { translate } from "@docusaurus/Translate";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { colorMode } = useColorMode();

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          className={`${styles.backToTop} ${
            colorMode === "dark" ? styles.backToTopDark : ""
          }`}
          onClick={scrollToTop}
          aria-label={translate({
            id: "theme.BackToTop.buttonAriaLabel",
            message: "Scroll back to top",
            description: "The ARIA label for the back to top button",
          })}
          title="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.backToTopIcon}
          >
            <path
              d="M7 14L12 9L17 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default BackToTop;
