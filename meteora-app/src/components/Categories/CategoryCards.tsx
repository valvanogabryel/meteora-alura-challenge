"use client";
import useCategories from "@/hooks/useCategories";
import { useState, useEffect } from "react";
import { CategoryCard } from "./CategoryCard";

export function CategoryCards() {
  const [size, setSize] = useState<"mobile" | "tablet" | "desktop">("mobile");

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

  const categories = useCategories(size);

  return (
    <div className="grid grid-cols-2 gap-8 mt-4 w-[90.8%] sm:grid-cols-3 lg:flex">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.name} />
      ))}
    </div>
  );
}
