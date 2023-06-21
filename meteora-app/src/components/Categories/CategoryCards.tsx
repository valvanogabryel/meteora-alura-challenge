"use client";

import { CategoryCard } from "./CategoryCard";
import useCategoriesImage from "@/hooks/useCategoriesImage";

export function CategoryCards() {
  const categories = useCategoriesImage();

  return (
    <div className="grid grid-cols-2 gap-8 mt-4 w-[90.8%] sm:grid-cols-3 lg:flex">
      {categories.map((category) => (
        <CategoryCard category={category} key={category.name} />
      ))}
    </div>
  );
}
