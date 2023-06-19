import Image from "next/image";
import logo from "@/assets/mobile/Logo mobile.png";
import { FiMenu as MenuBurguer } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <header className="bg-black flex flex-wrap items-center justify-between px-[22px] py-5 h-[58px] text-white">
        <div>
          <a href="/">
            <Image src={logo} alt="Logo da Meteora" />
          </a>
        </div>

        <button className="md:hidden">
          <MenuBurguer
            className="text-meteora-lime-yellow scale-150"
            height={13.5}
            width={18}
          />
        </button>
        {/* Tablet > */}
        <nav className="hidden md:flex items-center">
          <ul>
            <li>Home</li>
            <li>Nossas lojas</li>
            <li>Noviades</li>
            <li>Promoções</li>
          </ul>
        </nav>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        main
      </main>
    </>
  );
}
