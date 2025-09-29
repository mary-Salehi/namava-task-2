import { useEffect, useRef, useState } from "react";

export const useScroll = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY.current) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener('scroll' , handleScroll);
    return () => window.removeEventListener('scroll' , handleScroll);
  }, []);

  return isHeaderFixed
};
