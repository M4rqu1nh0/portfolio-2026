import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Handles scrolling on client-side navigation, which React Router does not do
 * for URL hash fragments. When the location carries a hash (e.g. "/#proyectos"),
 * it waits for the target element to mount and scrolls to it; otherwise it
 * resets the scroll position to the top of the page.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let frame = 0;

    // The target section may not be mounted yet right after navigation, so
    // retry across a few animation frames until it exists (or we give up).
    const scrollWhenReady = () => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
      if (attempts++ < 30) {
        frame = requestAnimationFrame(scrollWhenReady);
      }
    };

    frame = requestAnimationFrame(scrollWhenReady);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
