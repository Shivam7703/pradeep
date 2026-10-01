'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { banner1, banner2 } from '@/assets';

// Import Swiper core and module styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  },
};

export default function OurServices() {
  const services = [
    {
      id: 1,
      title: 'Online Degree Programs',
      category: 'Academic Excellence',
      description: 'Earn accredited bachelor & master degrees from top-ranked universities with flexible online schedules.',
      image: banner1,
      tag: 'Most Popular',
      stats: '98% Pass Rate',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Interactive Live Classes',
      category: 'Real-time Learning',
      description: 'Engage in live interactive video lectures with industry expert educators and real-time Q&A sessions.',
      image: banner2,
      tag: 'Live Sessions',
      stats: '24/7 Access',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: '1-on-1 Expert Mentorship',
      category: 'Career Growth',
      description: 'Get personalized career coaching and 1-on-1 guidance from top industry leaders to accelerate your career.',
      image: banner1,
      tag: 'Personalized',
      stats: '100+ Mentors',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Skill Certification Bootcamps',
      category: 'Industry Standards',
      description: 'Master in-demand skills in Tech, Business, and Design with hands-on projects and recognized certificates.',
      image: banner2,
      tag: 'Certified',
      stats: '100% Practical',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 5,
      title: 'Self-Paced Learning Hub',
      category: 'Flexibility',
      description: 'Study anytime, anywhere with lifetime access to high-quality recorded lectures, quizzes, and resources.',
      image: banner1,
      tag: 'Self Paced',
      stats: '500+ Hours',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 6,
      title: 'Global Career Placement',
      category: 'Employment Support',
      description: 'Get job-ready with resume building, mock interviews, and direct referral connections to global companies.',
      image: banner2,
      tag: 'High Placement',
      stats: '85% Hired',
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

 

  return (
    <section className="relative w-full px-4 py-7 md:p-14 lg:px-20 bg-white overflow-hidden ">
     

      <div className="max-w-7xl mx-auto ">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={headerVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16"
        >
          <div className="max-w-2xl space-y-3">
            
            <h2 className="text-3xl  md:text-4xl capitalize   font-semibold text-zinc-700 leading-tight">
              Empowering Your Future With{' '}
              <span className="text-orange-600">
                World-Class Services
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Explore our comprehensive range of educational solutions designed to help learners and professionals excel in their career path.
            </p>
          </div>

          {/* Custom Navigation Arrows via Class Name selectors */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              aria-label="Previous slide"
              className="custom-prev-btn group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-blue-100 shadow-md hover:bg-blue-600 hover:border-blue-600 text-gray-700 hover:text-white transition-all duration-300 focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
            >
              <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              aria-label="Next slide"
              className="custom-next-btn group flex items-center justify-center w-12 h-12 rounded-full bg-white border border-blue-100 shadow-md hover:bg-blue-600 hover:border-blue-600 text-gray-700 hover:text-white transition-all duration-300 focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
            >
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Swiper Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={28}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination',
            }}
            navigation={{
              prevEl: '.custom-prev-btn',
              nextEl: '.custom-next-btn',
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="w-full pb-14 !overflow-visible"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id} className="h-auto">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden border border-blue-100/80 shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-600/15 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-zinc-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Top Tag & Category */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-md text-blue-700 shadow-sm">
                        {service.category}
                      </span>
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-red-600 text-white shadow-md">
                        {service.tag}
                      </span>
                    </div>

                    {/* Overlay Icon & Metric */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 text-white">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center shadow-sm">
                          {service.icon}
                        </div>
                        <span className="text-xs font-semibold text-white">
                          {service.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-5">
                    <div className="space-y-2.5">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-zinc-600 transition-colors duration-300 line-clamp-1">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    {/* Card Footer / CTA */}
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                        Learn More
                      </span>

                      <div className="w-9 h-9 rounded-full bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Styled Pagination Dots Container */}
          <div className="custom-swiper-pagination flex justify-center items-center gap-2 mt-4" />
        </motion.div>
      </div>

      {/* Global CSS overrides for Swiper Pagination dots */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1;
          opacity: 1;
          border-radius: 9999px;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          width: 32px;
          background-color: #2563eb;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}