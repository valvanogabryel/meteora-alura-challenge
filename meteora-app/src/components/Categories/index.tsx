import { CategoryCards } from "./CategoryCards";

export function Categories() {
  return (
    <section className="flex flex-col items-center my-4">
      <h3 className="font-medium text-3xl text-meteora-dark">
        Busque por categorias:
      </h3>

      <CategoryCards />
    </section>
  );
}
