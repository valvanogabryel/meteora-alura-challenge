import Image from "next/image";
import bannerMobile from "@/assets/mobile/Banner carousel 1 _ 375.png";
import bannerTablet from "@/assets/tablet/Banner carousel 1 _ 768.png";
import bannerDesktop from "@/assets/desktop/Banner carousel 1 _ 1440 (1).png";

export function Banner() {
  return (
    <div className="min-w-screen bg-[#8960B4]">
      {/* Mobile */}
      <Image src={bannerMobile} alt="" className="md:hidden m-auto" />
      {/* Tablet */}
      <Image src={bannerTablet} alt="" className="hidden md:flex lg:hidden" />
      {/* Desktop */}
      <Image src={bannerDesktop} alt="" className="hidden lg:flex" />
    </div>
  );
}
