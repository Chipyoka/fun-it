import { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Arrow from '../assets/arrow.png';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300); // show after 300px
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="top-btn"
        aria-label="Scroll to top"
      >
        <img src={Arrow} alt="arrow" width="50px" />
      </button>
    )
  );
};

export default ScrollToTopButton;
