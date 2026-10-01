'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, Variants } from 'framer-motion';
import { about, about2 } from '@/assets';

interface Metric {
  label: string;
  percentage: number;
}

export default function AboutUs(): React.JSX.Element {
  const successMetrics: Metric[] = [
    { label: 'Course Completion Rate', percentage: 92 },
    { label: 'Student Satisfaction', percentage: 98 },
    { label: 'Career Advancement', percentage: 85 },
  ];

  const contentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="w-full mx-auto px-4 py-7 md:p-14 lg:px-20  overflow-hidden bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 md:gap-20 items-center max-w-7xl mx-auto">

        {/* Left Column: Creative Animated Image Collage */}
        <div className="lg:col-span-6 relative h-105 sm:h-115 md:h-135 w-full flex items-center justify-center">

          <div className="relative w-full h-full">

            {/* 1. Large Top-Left Image (about) */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute top-0 left-0 sm:left-4 w-[85%] h-full rounded-2xl mx-auto md:rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10"
            >
              <Image
                src={about as StaticImageData | string}
                alt="Online Students Learning"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 70vw, 35vw"
                priority
              />
            </motion.div>


            {/* Decorative Elements */}
            <div className="absolute -bottom-6 right-8 w-28 h-28 -z-10 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] bg-size-[12px_12px] opacity-40" />

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="absolute -top-6 -left-6 w-36 h-36 rounded-full bg-blue-100/70 -z-10 blur-xl"
            />
          </div>
        </div>

        {/* Right Column: Content & Success Bars */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8"
        >
          {/* Main Title & Description */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <h4 className="text-xs font-bold bg-blue-100 p-2 px-3 rounded-full w-max text-blue-800 uppercase tracking-wider">
                ABOUT US
            </h4>
            <h2 className="text-3xl md:text-4xl capitalize  font-semibold text-zinc-900 leading-tight">
              Transform your Career growth through{' '}
              <span className="text-orange-600">online education</span>
            </h2>
            <p className="text-zinc-800 leading-relaxed text-sm sm:text-base">
              Empowering students with industry-relevant skills and personalized mentorship. We provide flexible online learning programs tailored to advance your career and achieve academic excellence.
            </p>
                 <p className="text-zinc-800 leading-relaxed text-sm sm:text-base">
              Empowering students with industry-relevant skills and personalized mentorship. We provide flexible online learning programs tailored to advance your career and achieve academic excellence.
            </p>
          </motion.div>

          {/* Animated Success / Progress Bars */}
          <div className="space-y-5 ">
            {successMetrics.map((metric, index) => (
              <motion.div key={index} variants={fadeInUp} className="space-y-2">
                <div className="flex justify-between items-center text-sm sm:text-base font-semibold text-zinc-800">
                  <span>{metric.label}</span>
                  <span className="text-green-700 font-bold">{metric.percentage}%</span>
                </div>
                {/* Progress Bar Container */}
                <div className="w-full bg-blue-50/80 rounded-full h-2 overflow-hidden border border-blue-100/80 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                    className="bg-blue-600 h-2 rounded-full shadow-sm"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}