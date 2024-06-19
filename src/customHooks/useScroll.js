import { useEffect, useState } from "react";

function useScroll() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  function moveToTop() {
    window.scroll(0, 0);
  }

  return [scroll, moveToTop];
}

export default useScroll;
