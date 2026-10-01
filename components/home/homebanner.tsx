'use client';

import React from 'react';
import Image from 'next/image';
import { banner1, banner2 } from '@/assets';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomeBanner() {
  const slides = [
    { id: 1, src: banner1, alt: 'Banner 1' },
    { id: 2, src: banner2, alt: 'Banner 2' },
  ];

  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className=" w-full h-full">
            <Image
              src={slide.src}
              alt={slide.alt}
            
              priority={slide.id === 1} // Preload the first banner for LCP optimization
              className="object-contain w-screen h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}