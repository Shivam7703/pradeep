'use client';

import React, { useRef } from 'react';
import {
  LuCpu,
  LuFlaskConical,
  LuTrendingUp,
  LuLanguages,
  LuHeartPulse,
  LuCode,
  LuPalette,
  LuArrowLeft,
  LuArrowRight
} from 'react-icons/lu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface CategoryItem {
  id: string;
  title: string;
  coursesCount: number;
  icon: React.ElementType;
  bgColor: string;
  circleBg: string;
}

const categories: CategoryItem[] = [
  {
    id: 'engineering',
    title: 'Engineering',
    coursesCount: 68,
    icon: LuCpu,
    bgColor: 'bg-[#0f9f80]', // Dark Teal
    circleBg: 'bg-white/15',
  },
  {
    id: 'science',
    title: 'Science',
    coursesCount: 59,
    icon: LuFlaskConical,
    bgColor: 'bg-[#f5a600]', // Amber / Gold
    circleBg: 'bg-white/15',
  },
  {
    id: 'marketing',
    title: 'Marketing',
    coursesCount: 28,
    icon: LuTrendingUp,
    bgColor: 'bg-[#898cc2]', // Soft Purple
    circleBg: 'bg-white/15',
  },
  {
    id: 'languages',
    title: 'Languages',
    coursesCount: 137,
    icon: LuLanguages,
    bgColor: 'bg-[#ff4d00]', // Vibrant Red-Orange
    circleBg: 'bg-white/15',
  },
  {
    id: 'health-fitness',
    title: 'Health & Fitness',
    coursesCount: 94,
    icon: LuHeartPulse,
    bgColor: 'bg-[#82cb7b]', // Soft Green
    circleBg: 'bg-white/15',
  },
  {
    id: 'development',
    title: 'Development',
    coursesCount: 112,
    icon: LuCode,
    bgColor: 'bg-[#3b82f6]', // Vibrant Blue
    circleBg: 'bg-white/15',
  },
  {
    id: 'design',
    title: 'Art & Design',
    coursesCount: 45,
    icon: LuPalette,
    bgColor: 'bg-[#ec4899]', // Pink
    circleBg: 'bg-white/15',
  },
];

export default function TrendingCategoriesSlider(): React.JSX.Element {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full bg-white px-4 py-7 md:p-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
              Top <span className='text-orange-600'>Trending</span> Categories
            </h2>
            <p className="mt-3 text-zinc-500 text-sm sm:text-base leading-relaxed">
              Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, blandit posuere and ligula varius magna a porta
            </p>
          </div>

          <a
            href="#categories"
            className="inline-flex items-center justify-center border border-zinc-300 hover:border-zinc-400 bg-white text-zinc-800 font-semibold px-5 py-2.5 rounded-md text-sm transition-colors shadow-sm self-start md:self-auto shrink-0"
          >
            View All Categories
          </a>
        </div>

        {/* Categories Swiper Slider Stage */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            slidesPerView={1.2}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="!pb-4 !pt-2"
          >
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <SwiperSlide key={cat.id}>
                  <div
                    className={`${cat.bgColor} text-white rounded-2xl p-6 h-[260px] flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-1.5  select-none`}
                  >
                    {/* Circle Icon Container */}
                    <div className={`w-20 h-20 rounded-full ${cat.circleBg} flex items-center justify-center mb-5 backdrop-blur-sm border border-white/20`}>
                      <IconComponent className="w-10 h-10 text-white stroke-[1.75]" />
                    </div>

                    {/* Title & Count */}
                    <h3 className="text-xl font-bold tracking-wide text-white">
                      {cat.title}
                    </h3>
                    <p className="text-sm text-white/90 font-medium mt-1">
                      {cat.coursesCount} Courses
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation Arrows below slider */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous Slide"
              className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <LuArrowLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next Slide"
              className="p-2 text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              <LuArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}