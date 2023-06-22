"use client";

import products from "@/hooks/useProducts";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { ModalHeader } from "./ModalHeader";
import Image from "next/image";
import { PurpleButton } from "./PurpleButton";

interface Props {
  selectedProduct: string;
  setSelectedProduct: Dispatch<SetStateAction<string | null>>;
}

export function ProductDetails({ selectedProduct, setSelectedProduct }: Props) {
  const currentProduct = products.find(
    (product) => product.id === selectedProduct
  );

  if (currentProduct) {
    return (
      <motion.section
        layoutId={selectedProduct}
        className="fixed top-0 bottom-0 left-0 right-0 inset-0 flex items-center justify-center modal-container backdrop-blur-sm"
      >
        <div className="bg-white shadow-xl h-[51rem] overflow-auto">
          <ModalHeader onClose={() => setSelectedProduct(null)}>
            Confira detalhes sobre o produtos
          </ModalHeader>
          <main className="p-4 pb-8">
            <div className="border lg:border-none">
              <div className="flex flex-col md:flex-row">
                <div>
                  <Image
                    src={currentProduct.image}
                    alt=""
                    className="w-full object-cover md:w-auto md:min-h-[28rem]"
                  />
                </div>

                <div className="text-meteora-dark px-4">
                  <motion.div
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.3 }}
                    className="border-b border-meteora-dark flex flex-col"
                  >
                    <motion.h5 className="font-bold py-6">
                      {currentProduct.name}
                    </motion.h5>
                    <motion.p className="text-xs+1 w-11/12 pb-6">
                      {currentProduct.description}
                    </motion.p>
                  </motion.div>

                  <div className="py-6">
                    <span className="text-xl font-medium">
                      {currentProduct.price.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
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

                  <div className="py-4">
                    <div>
                      <h6 className="font-bold text-xs+1 pb-4">Cores:</h6>
                    </div>
                    <div className="flex border-b pb-4 gap-4">
                      <div>
                        <label className="flex flex-col gap-2 text-xs+1">
                          <input type="radio" name="color" value="azul-claro" />
                          Azul claro
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2 text-xs+1">
                          <input type="radio" name="color" value="offwhite" />
                          Offwhite
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2 text-xs+1">
                          <input type="radio" name="color" value="preto" />
                          Preto
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <h6 className="font-bold text-xs+1 pb-4">Tamanho:</h6>
                    </div>

                    <div className="flex gap-4 pb-4">
                      <div>
                        <label className="flex flex-col gap-2 text-xs+1">
                          <input type="radio" name="size" value="p" />P
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2 text-xs+1">
                          <input type="radio" name="size" value="pp" />
                          PP
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2 text-xs+1">
                          <input type="radio" name="size" value="m" />M
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2 text-xs+1">
                          <input type="radio" name="size" value="g" />G
                        </label>
                      </div>
                      <div>
                        <label className="flex flex-col gap-2 text-xs+1">
                          <input type="radio" name="size" value="gg" />
                          GG
                        </label>
                      </div>
                    </div>
                  </div>
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
