"use client";
import { CategoryCard } from "./CategoryCard";
import useCategoriesImage from "@/hooks/useCategoriesImage";

export function CategoryCards() {
  const categories = useCategoriesImage();

  return (
    <div className="grid grid-cols-2 gap-8 mt-8 w-[86%] sm:grid-cols-3 md:w-[90%] lg:flex lg:justify-center">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.name} />
      ))}
    </div>
  );
}
