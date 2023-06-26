"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import banners from "@/utils/bannerImagesImports";
import { useEffect, useState } from "react";

const Slider = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const [images, setImages] = useState<any>([]);

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
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="lg:h-full"
    >
      {images?.map((image: any) => (
        <SwiperSlide key={image}>
          <Image
            src={image}
            alt="Banner"
            width={1200}
            height={800}
            sizes="100vw"
            quality={100}
            className="md:-mt-[1px] lg:-mt-1 w-screen"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
