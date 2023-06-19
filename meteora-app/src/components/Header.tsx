import Image from "next/image";
import logo from "@/assets/mobile/Logo mobile.png";
import { FiMenu as MenuBurguer } from "react-icons/fi";
import { Search } from "./Search";
export function Header() {
  return (
    <header className="flex flex-wrap justify-center">
      <div className="bg-black flex flex-wrap justify-between items-center w-full px-[22px] py-5 h-[58px] text-white">
        <div>
          <a href="/">
            <Image src={logo} alt="Logo da Meteora" />
          </a>
        </div>

        <button className="md:hidden">
          <MenuBurguer className="text-meteora-lime-yellow scale-150" />
        </button>
        {/* Only for tablets and desktop  */}
        <nav className="hidden md:flex items-center">
          <ul>
            <li>Home</li>
            <li>Nossas lojas</li>
            <li>Noviades</li>
            <li>Promoções</li>
          </ul>
        </nav>
      </div>
      <Search />
    </header>
  );
}
