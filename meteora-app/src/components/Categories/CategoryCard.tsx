import Image from "next/image";

export function CategoryCard({ category }: any) {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-full bg-meteora-lime-yellow">
        <Image src={category.image} alt="" className="m-auto" />
      </div>
      <div className="bg-black text-white px-4 py-2">
        <p className="font-medium text-center duration-300 group-hover:scale-105">
          {category.name}
        </p>
      </div>
    </div>
  );
}
