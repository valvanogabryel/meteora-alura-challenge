import Image from "next/image";
import tshirts from "@/assets/desktop/Categorias/Categoria camiseta.png";

export function CategoryCards() {
  return (
    <div className="grid grid-cols-2 gap-8 mt-4 w-[90.8%] sm:grid-cols-3 lg:flex">
      <div className="relative group cursor-pointer">
        <div className="w-full bg-meteora-lime-yellow">
          <Image src={tshirts} alt="" className="m-auto" />
        </div>
        <div className="bg-black text-white px-4 py-2">
          <p className="font-medium text-center duration-300 group-hover:scale-105">
            Camisetas
          </p>
        </div>
      </div>
    </div>
  );
}
