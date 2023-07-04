import IProduct from "@/types/IProduct";

export default function filterProducts(
  products: IProduct[],
  selectedCategory: string | null,
  searchValue: string
) {
  return products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const searchMatch = product.name
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    return categoryMatch && searchMatch;
  });
}
