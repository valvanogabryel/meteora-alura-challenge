"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface CategoryContextType {
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
}

export const CategoryContext = createContext<CategoryContextType>({
  selectedCategory: "",
  setSelectedCategory: () => {},
});

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>("");

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

const useSelectedCategory = () => {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  return {
    selectedCategory,
    setSelectedCategory,
  };
};

export default useSelectedCategory;
