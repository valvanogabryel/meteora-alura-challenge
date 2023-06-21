import { SectionTitle } from "../SectionTitle";
import { CategoryCards } from "./CategoryCards";

export function Categories() {
  return (
    <section className="flex flex-col items-center my-4">
      <SectionTitle>Busque por categorias:</SectionTitle>
      <CategoryCards />
    </section>
  );
}
