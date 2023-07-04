"use client";

import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { ModalHeader } from "../ModalHeader";
import { PurpleButton } from "../PurpleButton";
import { ProductColors } from "./ProductColors";
import { ProductSizes } from "./ProductSizes";

import IProduct from "@/types/IProduct";

import { motion } from "framer-motion";

import formatMoney from "@/utils/formatMoney";

interface Props {
  products: IProduct[];
  selectedProduct: string;
  setSelectedProduct: Dispatch<SetStateAction<string | null>>;
}

export function ProductDetails({
  products,
  selectedProduct,
  setSelectedProduct,
}: Props) {
  const currentProduct = products.find(
    (product) => product.id === selectedProduct
  );

  if (currentProduct) {
    document.documentElement.classList.add("!overflow-hidden");

    return (
      <motion.section
        layoutId={selectedProduct}
        className="fixed top-0 bottom-0 left-0 right-0 inset-0 flex items-center justify-center  backdrop-blur-sm z-50"
      >
        <div className="bg-white shadow-xl max-h-[51rem] overflow-auto scale-90 md:scale-100 rounded-sm">
          <ModalHeader onClose={() => setSelectedProduct(null)}>
            Confira detalhes sobre o produto
          </ModalHeader>
          <main className="p-4 pb-8">
            <div className="border lg:border-none">
              <div className="flex flex-col md:flex-row">
                <div>
                  <Image
                    src={currentProduct.image}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full object-cover md:w-auto md:min-h-[28rem]"
                  />
                </div>

                <div className="text-meteora-dark px-4">
                  <div className="border-b border-meteora-dark flex flex-col">
                    <motion.h5
                      className="font-bold py-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      {currentProduct.name}
                    </motion.h5>
                    <motion.p
                      className="text-xs+1 w-11/12 pb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {currentProduct.description}
                    </motion.p>
                  </div>

                  <div className="py-6">
                    <span className="text-xl font-medium">
                      {formatMoney(currentProduct.price)}
                    </span>
                  </div>

                  <p className="text-xs+1 pb-4 border-b">
                    <a
                      href="https://riachuelo.com"
                      target="_blank"
                      className="text-gray-400 hover:text-meteora-dark"
                    >
                      Vendido e entregue por Riachuelo
                    </a>
                  </p>

                  <ProductColors colors={currentProduct.colors} />

                  <ProductSizes productSize={currentProduct.sizes} />

                  <PurpleButton className="">Adicionar à Sacola</PurpleButton>
                </div>
              </div>
            </div>
          </main>
        </div>
      </motion.section>
    );
  }

  return null;
}
