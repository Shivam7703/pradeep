'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  LuShieldCheck,
  LuGraduationCap,
  LuAward,
  LuHeadphones,
  LuSparkles,
  LuCheck,
  LuTrendingUp
} from 'react-icons/lu';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badgeText: string;
}

const features: FeatureItem[] = [
  {
    id: 'feature-1',
    title: 'Honest & Transparent Counseling',
    description:
      'Offering clear information about fees, eligibility, admission requirements, and available options so students and parents can make informed decisions.',
    icon: LuShieldCheck,
    badgeText: 'Trust & Ethics',
  },
  {
    id: 'feature-2',
    title: 'Guidance on Recognised Universities',
    description:
      'Helping students check university recognition and relevant approval requirements when selecting institutions in India or abroad.',
    icon: LuGraduationCap,
    badgeText: 'Accredited',
  },
  {
    id: 'feature-3',
    title: 'Complete Admission Assistance',
    description:
      'Supporting students with applications, document preparation, university procedures, visa applications, and pre-departure arrangements.',
    icon: LuAward,
    badgeText: 'Full Assistance',
  },
  {
    id: 'feature-4',
    title: 'Personalised One-on-One Counseling',
    description:
      'Providing individual attention to students and parents, with guidance tailored to academic qualifications, interests, budget, and future plans.',
    icon: LuHeadphones,
    badgeText: '24/7 Support',
  },
];

const highlights = [
  'Personalised guidance for course and university selection.',
  'Transparent information about fees and eligibility.',
  'Support with applications, documentation, and visa procedures.',
  'Guidance throughout the admission and pre-departure process.',
  '12+ Years of Educational Guidance: Bringing experience and a student-focused approach to help learners choose suitable courses, colleges, and career pathways.',
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs(): React.JSX.Element {
  return (
    <section className="w-full bg-zinc-50 px-4 py-7 md:p-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h4
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className=" px-3.5 py-1.5 rounded-full text-xs w-max font-bold bg-blue-100 text-blue-700 border border-blue-200/60"
            >
              WHY CHOOSE US
            </motion.h4>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight leading-tight"
            >
              Trusted For Your Higher <span className="text-orange-600">Higher Education</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-600 text-sm sm:text-base leading-relaxed"
            >
We help students make informed decisions about MBBS, Engineering, and Management admissions through personalised counseling, clear information, and step-by-step support at every stage.
            </motion.p>

            {/* Checklist Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 pt-2"
            >
              {highlights.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-green-600 flex items-center justify-center shrink-0">
                    <LuCheck className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800">
                    {point}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Floating Trust Banner Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <div className="bg-linear-to-r from-violet-600 to-blue-900 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
                  <LuTrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">12+ Years of Trust</h4>
                  <p className="text-blue-100 text-xs mt-0.5">
                    Guiding students toward their dream universities with 100% commitment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 4 Key Feature Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg shadow-zinc-300 hover:border-blue-200 hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-violet-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                        <IconComponent className="w-7 h-7 stroke-[1.8]" />
                      </div>

                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-zinc-700 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
}