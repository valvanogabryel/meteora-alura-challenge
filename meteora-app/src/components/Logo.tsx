import Image from "next/image";
import logoMobile from "@/assets/mobile/Logo mobile.png";
import logoTablet from "@/assets/tablet/Logo tablet.png";
import logoDesktop from "@/assets/desktop/Logo desktop.png";

export function Logo() {
  return (
    <div>
      <a href="/">
        {/* Mobile */}
        <Image src={logoMobile} alt="Logo da Meteora" className="md:hidden" />
        {/* Tablet */}
        <Image
          src={logoTablet}
          alt="Logo da Meteora"
          className="hidden md:flex lg:hidden"
        />
        {/* Desktop */}
        <Image
          src={logoDesktop}
          alt="Logo da Meteora"
          className="hidden lg:flex"
        />
      </a>
    </div>
  );
}
