import { FiMenu as MenuBurguer } from "react-icons/fi";
import { Search } from "./Search";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex flex-wrap justify-center md:justify-between md:flex-nowrap md:bg-black items-center">
      <div className="bg-black md:bg-transparent flex flex-wrap justify-between items-center w-full px-[22px] py-5 h-[58px] text-white md:justify-normal md:w-auto lg:py-0">
        <Logo />

        <button className="md:hidden">
          <MenuBurguer className="text-meteora-lime-yellow scale-150" />
        </button>
        {/* Only for tablets and desktop  */}
        <nav className="hidden md:inline-block">
          <ul className="flex gap-6 items-center text-xs+1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Nossas lojas</a>
            </li>
            <li>
              <a href="/">Novidades</a>
            </li>
            <li>
              <a href="/">Promoções</a>
            </li>
          </ul>
        </nav>
      </div>
      <Search />
    </header>
  );
}
