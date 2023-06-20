import categories from "@/categories";
import { CategoryCard } from "./CategoryCard";

export function CategoryCards() {
  return (
    <div className="grid grid-cols-2 gap-8 mt-4 w-[90.8%] sm:grid-cols-3 lg:flex">
      {categories.map((category) => (
        <CategoryCard key={category.name} />
      ))}
    </div>
  );
}
