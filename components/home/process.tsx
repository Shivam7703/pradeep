'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  LuSearch,
  LuGraduationCap,
  LuFileCheck,
  LuPlaneTakeoff,
  LuArrowRight,
  LuSparkles
} from 'react-icons/lu';
import { MdWork } from 'react-icons/md';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Free Profile Counseling',
    description: 'We assess your academic background, career goals, and budget to shortlist suitable options.',
    icon: LuSearch,
    badge: 'Step 1',
  },
  {
    number: '02',
    title: 'University Selection',
    description: 'Choose from top NMC/WHO recognized medical or engineering universities across top countries.',
    icon: LuGraduationCap,
    badge: 'Step 2',
  },
  {
    number: '03',
    title: 'Documentation & Admission',
    description: 'Hassle-free application submission, document verification, and guaranteed admission letter.',
    icon: LuFileCheck,
    badge: 'Step 3',
  },
  {
    number: '04',
    title: 'Visa & Departure',
    description: 'Complete assistance for student visa processing, flight bookings, and pre-departure guidance.',
    icon: LuPlaneTakeoff,
    badge: 'Step 4',
  },
];

// Motion Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WorkProcess(): React.JSX.Element {
  return (
    <section className="w-full bg-zinc-50 px-4 py-7 md:p-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200/60 mb-3"
          >
            <MdWork className="w-3.5 h-3.5" /> HOW WE WORK
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl  font-semibold text-zinc-900 tracking-tight"
          >
            Our <span className="text-orange-600">Simple 4-Step </span>Admission Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed"
          >
            From counseling to flying to your dream college — we guide you through every stage smoothly without any hassle.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Animated Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[48%] left-[5%] right-[10%] h-0.5 border-t-4 border-dashed border-blue-700 -z-0" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="relative bg-white rounded-lg p-6 sm:p-8 shadow-xl shadow-zinc-200 flex flex-col justify-between z-10 group"
              >
                {/* Step Top Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-lg  text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shadow-lg">
                    <IconComponent className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <span className="text-3xl font-extrabold text-sky-300 group-hover:text-zinc-600/50 transition-colors duration-300">
                   STEP {step.number}
                  </span>
                </div>

                {/* Content */}
                <div>
                 
                  <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Call To Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center bg-linear-to-r from-violet-600 to-blue-700  rounded-2xl p-8 sm:p-10 text-white shadow-xl shadow-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-2xl font-bold">Ready to Start Your Journey?</h4>
            <p className="text-blue-100 text-xs sm:text-sm mt-1">
              Talk to our expert counselors today and get free 1-on-1 guidance.
            </p>
          </div>

          <button className="bg-white hover:bg-zinc-100 text-blue-600 font-bold px-6 py-3 rounded-xl text-sm shadow transition-all shrink-0">
            Book Free Counseling
          </button>
        </motion.div>

      </div>
    </section>
  );
}