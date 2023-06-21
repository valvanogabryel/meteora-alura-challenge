import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { PurpleButton } from "./PurpleButton";

const products = [
  {
    id: 1,
    name: "Camiseta Conforto",
    description:
      "Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.",
    price: 70.0,
    image: "/../assets/mobile/Imagens cards/Card camiseta.png",
  },
];

export function Products() {
  return (
    <section className="mt-10">
      <SectionTitle>Produtos que estão bombando!</SectionTitle>
      {/* cards grid */}
      <div className="flex flex-col items-center -mt-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {/* cards */}
        {products.map((product) => (
          <div key={product.id} className="m-8 border max-w-xs">
            <div className="">
              <Image
                src={product.image}
                alt="placeholder"
                className=""
                width={330}
                height={389}
              />
            </div>

            <div className="flex flex-col justify-start text-meteora-dark p-4">
              <h5 className="font-bold -mt-1 mb-4">{product.name}</h5>
              <p className="text-xs+1 mb-4">{product.description}</p>
              <span className="font-bold mb-3">
                R$ {product.price.toFixed(2)}
              </span>
              <PurpleButton width={40}>Ver mais</PurpleButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
