"use client";
import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { PurpleButton } from "./PurpleButton";
import products from "@/hooks/useProducts";

export function Products() {
  return (
    <section className="mt-10">
      <SectionTitle>Produtos que estão bombando!</SectionTitle>
      {/* cards grid */}
      <div className="flex flex-col items-center -mt-2 sm:grid sm:grid-cols-2 sm:justify-items-center lg:grid-cols-3 xl:max-w-[90%] xl:mx-auto 2xl:max-w-[75%]">
        {/* cards */}
        {products.map((product) => (
          <div
            key={product.id}
            className="m-8 border max-w-xs md:w-11/12 md:max-w-none lg:w-4/5 xl:w-[93%]"
          >
            <div className="">
              <Image
                src={product.image}
                alt="placeholder"
                className="w-full"
                width={330}
                height={389}
              />
            </div>

            <div className="flex flex-col justify-start text-meteora-dark p-4">
              <h5 className="font-bold -mt-1 mb-4">{product.name}</h5>
              <p className="text-xs+1 mb-4 sm:overflow-auto sm:max-h-[39px]">
                {product.description}
              </p>
              <span className="font-bold mb-3">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <PurpleButton className="w-[40%] sm:w-[50%] md:w-[35%] lg:w-[50%] xl:w-[35%] 2xl:w-[35%]">
                Ver mais
              </PurpleButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
