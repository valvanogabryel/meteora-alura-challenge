import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { PurpleButton } from "./PurpleButton";
import productImage from "@/assets/mobile/Imagens cards/Card camiseta.png";

export function Products() {
  return (
    <section>
      <SectionTitle>Produtos que estão bombando!</SectionTitle>

      {/* card */}
      <div className="m-8 border">
        <div className="">
          <Image src={productImage} alt="placeholder" className="" />
        </div>

        <div className="flex flex-col justify-start text-meteora-dark p-4">
          <h5 className="font-bold -mt-1 mb-4">Camiseta Conforto</h5>
          <p className="text-xs+1 mb-4">
            Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o
            verão. Modelagem unissex.
          </p>
          <span className="font-bold mb-3">R$ 70,00</span>
          <PurpleButton width="40">Ver mais</PurpleButton>
        </div>
      </div>
    </section>
  );
}
