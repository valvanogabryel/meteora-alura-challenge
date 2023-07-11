"use client";
import { useState } from "react";
import { CategoryCard } from "./CategoryCard";
import useCategoriesImage from "@/hooks/useCategoriesImage";
import useSelectedCategory from "@/context/CategoryContext";

export function CategoryCards() {
  const { selectedCategory, setSelectedCategory } = useSelectedCategory();

  const categories = useCategoriesImage();

  return (
    <ul className="grid grid-cols-2 gap-8 mt-8 w-[86%] sm:grid-cols-3 md:w-[90%] lg:flex lg:justify-center select-none">
      {categories.map((category) => (
        <CategoryCard
          category={category}
          key={category.name}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </ul>
  );
}
