'use client';

import React from 'react';
import Image from 'next/image';
import { banner1, banner2 } from '@/assets';

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import React Icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
    <div className="w-full relative overflow-hidden group">
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
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              priority={slide.id === 1}
              className="object-contain w-screen h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Previous Button with React Icons */}
      <div className="swiper-button-prev-custom hidden md:flex items-center justify-center absolute left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-all">
        <IoIosArrowBack className="text-2xl text-gray-800" />
      </div>

      {/* Custom Next Button with React Icons */}
      <div className="swiper-button-next-custom hidden md:flex items-center justify-center absolute right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition-all">
        <IoIosArrowForward className="text-2xl  text-gray-800" />
      </div>
    </div>
  );
}