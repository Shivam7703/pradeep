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
import { HiOutlineAcademicCap, HiOutlineVideoCamera, HiOutlineUserGroup, HiOutlineBadgeCheck, HiOutlineClock, HiOutlineBriefcase } from 'react-icons/hi';

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
    title: 'Flexible Online Degrees',
    category: 'Quality Education | Flexible Learning',
    description: 'Pursue bachelor’s and master’s degree programs with flexible study schedules and learning opportunities from reputed universities.',
    image: banner1,
    tag: 'Degree Program',
    stats: '98% Pass Rate',
    icon: <HiOutlineAcademicCap className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 2,
    title: 'Live Online Classes',
    category: 'Live Learning | Expert Guidance',
    description: 'Attend interactive online classes led by experienced educators, ask questions in real time, and learn through engaging discussions.',
    image: banner2,
    tag: 'Live Sessions',
    stats: '24/7 Learning Access',
    icon: <HiOutlineVideoCamera className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 3,
    title: 'Personalised Mentorship',
    category: 'Personal Guidance | Career Development',
    description: 'Receive individual guidance, career advice, and support from experienced professionals to build your skills and plan your career path.',
    image: banner1,
    tag: '1-on-1 Guidance',
    stats: '100+ Mentors',
    icon: <HiOutlineUserGroup className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 4,
    title: 'Professional Skill Development',
    category: 'Practical Training | Skill Development',
    description: 'Learn in-demand skills in technology, business, and design through practical projects, structured training, and certification programs.',
    image: banner2,
    tag: 'Certification',
    stats: 'Hands-On Learning',
    icon: <HiOutlineBadgeCheck className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 5,
    title: 'Learn Anytime, Anywhere',
    category: 'Flexible Study | Learn at Your Pace',
    description: 'Access recorded lessons, practice quizzes, and useful study materials at your convenience while learning at a pace that suits you.',
    image: banner1,
    tag: 'Self Paced',
    stats: '500+ Hours of Learning',
    icon: <HiOutlineClock className="w-5 h-5 text-blue-600" />,
  },
  {
    id: 6,
    title: 'Global Career Opportunities',
    category: 'Career Assistance | Job Readiness',
    description: 'Prepare for job opportunities with resume support, mock interviews, and guidance to connect with potential employers worldwide.',
    image: banner2,
    tag: 'Career Support',
    stats: '85% Hired',
    icon: <HiOutlineBriefcase className="w-5 h-5 text-blue-600" />,
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
              Building Your Future Through 
{' '}
              <span className="text-orange-600">
                Quality Education
              </span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
We offer a range of learning solutions designed to help students and professionals develop their skills, gain knowledge, and achieve their career goals.
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