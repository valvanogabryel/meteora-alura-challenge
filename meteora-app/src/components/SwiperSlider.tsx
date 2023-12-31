"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import banners from "@/utils/bannerImagesImports";
import { useEffect, useState } from "react";

import { Autoplay, Pagination, Navigation, EffectCreative } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  AiOutlineCaretRight as ArrowRight,
  AiOutlineCaretLeft as ArrowLeft,
} from "react-icons/ai";

const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    getImageSrc();
  }, [isDesktop, isMobile, isTablet]);

  const getImageSrc = () => {
    if (isMobile) {
      setImages(banners.mobile);
    } else if (isTablet) {
      setImages(banners.tablet);
    } else if (isDesktop) {
      setImages(banners.desktop);
    }
  };

  return (
    <Swiper
      spaceBetween={0}
      grabCursor={true}
      slidesPerView={1}
      centeredSlides={true}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      loop={true}
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      autoplay={{
        delay: 3000,
      }}
      modules={[Autoplay, Pagination, Navigation, EffectCreative]}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      effect={"creative"}
      className="md:max-h-[25rem] xl:max-h-[30rem] 2xl:max-h-[35rem]"
    >
      {images.map((image: any) => (
        <SwiperSlide key={image}>
          <Image
            src={image}
            alt="Banner"
            width={1200}
            height={800}
            sizes="100vw"
            quality={100}
            className="select-none md:-mt-[1px] lg:-mt-1 w-screen"
          />
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev after:hidden">
        <ArrowLeft className="text-white relative left-7 scale-[2] hover:scale-[2.2]" />
      </div>
      <div className="swiper-button-next after:hidden">
        <ArrowRight className="text-white relative right-7 scale-[2] hover:scale-[2.2]" />
      </div>
      <div className="swiper-pagination" />
    </Swiper>
  );
};

export default Slider;
