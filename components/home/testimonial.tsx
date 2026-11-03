'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { cl2, cl1, cl3 } from '@/assets';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: StaticImageData;
  content: string;
  rating: number;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Senior Software Engineer',
    company: 'Tier-1 Tech Product Co.',
    image: cl2,
    content:
      'Pradeep sir’s 1-on-1 mentorship completely shifted my career strategy. From resume optimization to executive presentation skills, I bagged a 60% hike in my targeted domain.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ananya Roy',
    role: 'Product Specialist',
    company: 'Global Tech Solutions',
    image: cl1,
    content:
      'The mock interview sessions and personalized feedback were pure gold. I gained clarity on navigating high-stakes behavioral rounds and salary negotiation.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Siddharth Patel',
    role: 'Engineering Manager',
    company: 'Enterprise Cloud Systems',
    image: cl3,
    content:
      'Transitioning into leadership roles seemed daunting until I followed Pradeep sir’s framework. His strategic guidance on corporate visibility is unmatched.',
    rating: 5,
  },
];

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Soft Accent Circles */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full shadow-sm">
              Success Stories
            </span>
            <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 mt-4">
              Loved by Professionals &<span className='text-orange-500'> Job Seekers</span> 
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3 max-w-xl">
              Real career transformations, job offer breakthroughs, and mentorship experiences shared by our mentees.
            </p>
          </div>

          {/* Navigation Arrows for Desktop */}
          <div className="hidden md:flex items-center gap-3 mt-6 md:mt-0">
            <button
              ref={prevRef}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow active:scale-95"
            >
              <IoIosArrowBack className="w-5 h-5 text-slate-700" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-sm hover:shadow active:scale-95"
            >
              <IoIosArrowForward className="w-5 h-5 text-slate-700" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-custom-pagination-light',
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation === 'object') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full pb-10"
        >
          {testimonialsData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="h-full flex flex-col justify-between bg-white border border-slate-200 hover:border-blue-300 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl group">
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, index) => (
                        <FaStar key={index} className="w-4 h-4" />
                      ))}
                    </div>
                    <FaQuoteLeft className="text-slate-300 group-hover:text-blue-500 transition-colors w-6 h-6" />
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-8">
                    "{item.content}"
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="relative  w-12 h-12 rounded-full overflow-hidden border border-slate-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      
                      className="object-cover object-center w-full h-full"
                
                    />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-sm md:text-base">
                      {item.name}
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm">
                      {item.role} · <span className="text-blue-600 font-medium">{item.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile Pagination Dots Container */}
        <div className="swiper-custom-pagination-light flex justify-center gap-2 mt-4 md:hidden" />
      </div>
    </section>
  );
}