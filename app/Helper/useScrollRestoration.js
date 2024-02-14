// useScrollRestoration.js
import { useEffect } from "react";

const useScrollRestoration = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Save the scroll position in local storage
      localStorage.setItem("scrollPosition", window.scrollY.toString());
    };

    const handlePopstate = () => {
      // Check if there is a saved scroll position in the history state
      const savedScrollPosition = history.state?.scrollPosition;

      // Scroll to the saved position when navigating back
      if (savedScrollPosition !== undefined) {
        window.scrollTo(0, savedScrollPosition);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Attach the popstate event listener
    window.addEventListener("popstate", handlePopstate);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    // Retrieve the scroll position from local storage
    const savedScrollPosition = localStorage.getItem("scrollPosition");

    // Scroll to the saved position when the component mounts
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  useEffect(() => {
    // Retrieve the scroll position from local storage
    const savedScrollPosition = localStorage.getItem("scrollPosition");

    // Scroll to the saved position when the component mounts
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []); // Empty dependency array ensures this runs only once on mount// Empty dependency array ensures this runs only once on mount
};

export default useScrollRestoration;
