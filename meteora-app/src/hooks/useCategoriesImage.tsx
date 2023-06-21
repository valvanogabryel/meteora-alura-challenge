import { useState, useEffect } from "react";
import useCategories from "./useCategories";

const useCategoriesImage = () => {
  const [size, setSize] = useState<"mobile" | "tablet" | "desktop">("mobile");
  let categories;

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 768 && windowWidth <= 1023) {
        setSize("tablet");
      } else if (windowWidth >= 1024) {
        setSize("desktop");
      } else {
        setSize("mobile");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  categories = useCategories(size);
  return categories;
};

export default useCategoriesImage;
