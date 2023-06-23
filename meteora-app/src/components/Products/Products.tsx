"use client";

import { useState } from "react";
import Image from "next/image";

import { ProductDetails } from "./ProductDetails";

import { AnimatePresence, motion } from "framer-motion";

import products from "@/hooks/useProducts";
import formatMoney from "@/utils/formatMoney";
import { PurpleButton } from "../PurpleButton";
import { SectionTitle } from "../SectionTitle";

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <section className="mt-10">
      <SectionTitle>Produtos que estão bombando!</SectionTitle>

      <div className="flex flex-col items-center -mt-2 sm:grid sm:grid-cols-2 md:w-[95%] md:mx-auto sm:justify-items-center lg:grid-cols-3 xl:max-w-[90%] xl:mx-auto 2xl:max-w-[75%]">
        {products.map((product) => (
          <motion.div
            key={product.id}
            layoutId={product.id}
            className="m-8 border max-w-xs md:w-11/12 md:max-w-none lg:w-4/5 xl:w-[93%]"
          >
            <motion.div>
              <Image
                src={product.image}
                alt="placeholder"
                className="w-full"
                width={330}
                height={389}
              />
            </motion.div>

            <div className="flex flex-col justify-start text-meteora-dark p-4">
              <motion.h5 className="font-bold -mt-1 mb-4">
                {product.name}
              </motion.h5>
              <motion.p className="text-xs+1 mb-4 sm:overflow-auto sm:max-h-[39px]">
                {product.description}
              </motion.p>
              <span className="font-bold mb-3">
                {formatMoney(product.price)}
              </span>
              <PurpleButton
                className="w-[40%] sm:w-[50%] md:w-[35%] lg:w-[50%] xl:w-[35%] 2xl:w-[35%]"
                onClick={() => setSelectedProduct(product.id)}
              >
                Ver mais
              </PurpleButton>
            </div>
          </motion.div>
        ))}

        <AnimatePresence>
          {selectedProduct && (
            <ProductDetails
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
