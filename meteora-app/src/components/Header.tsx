import { Search } from "./Search";
import { Logo } from "./Logo";
import MenuBurguer from "./MenuHamburguer/MenuBurguer";

export function Header() {
  return (
    <header className="flex flex-wrap justify-center md:justify-between md:flex-nowrap md:bg-black items-center">
      <div className="bg-black md:bg-transparent flex flex-wrap justify-between items-center w-full px-[22px] py-5 h-[58px] text-white md:justify-normal md:w-auto lg:py-0">
        <Logo />

        <MenuBurguer />

        {/* Only for tablets and desktop  */}
        <nav className="hidden md:inline-block">
          <ul className="flex gap-6 items-center text-xs+1">
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="/">Nossas lojas</a>
            </li>
            <li className="hover:underline">
              <a href="/">Novidades</a>
            </li>
            <li className="hover:underline">
              <a href="/">Promoções</a>
            </li>
          </ul>
        </nav>
      </div>
      <Search />
    </header>
  );
}
