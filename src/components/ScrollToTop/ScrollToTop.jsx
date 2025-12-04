import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Give the browser a tiny delay to render content before scrolling
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 20); // 10ms delay

    return () => clearTimeout(scrollTimeout);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
