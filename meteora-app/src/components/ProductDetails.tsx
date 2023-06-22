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
      <motion.section layoutId={selectedProduct}>
        <div className="bg-white z-50">
          <ModalHeader onClose={() => setSelectedProduct(null)}>
            Confira detalhes sobre o produtos
          </ModalHeader>
          <main className="p-4 pb-8">
            <div className="border">
              <div>
                <Image src={currentProduct.image} alt="" className="w-full" />
              </div>

              <motion.div animate="vai subir">
                <motion.h5 className="">{currentProduct.name}</motion.h5>
                <motion.p>{currentProduct.description}</motion.p>
              </motion.div>

              <span>
                {currentProduct.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>

              <p>Vendido e entregue por Riachuelo</p>
            </div>

            <div>
              <div>
                <h6>Cores:</h6>
              </div>
              <div>
                <label>
                  <input type="radio" name="color" value="azul-claro" />
                  Azul claro
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="color" value="offwhite" />
                  Offwhite
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="color" value="preto" />
                  Preto
                </label>
              </div>
            </div>

            <div>
              <div>
                <h6>Tamanho:</h6>
              </div>
              <div>
                <label>
                  <input type="radio" name="size" value="p" />P
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="size" value="pp" />
                  PP
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="size" value="m" />M
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="size" value="g" />G
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="size" value="gg" />
                  GG
                </label>
              </div>
            </div>
            <PurpleButton>Adicionar à Sacola</PurpleButton>
          </main>
        </div>
      </motion.section>
    );
  }

  return null;
}
