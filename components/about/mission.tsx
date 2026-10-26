'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LuEye,
  LuTarget,
  LuCompass,
  LuCheck,
  LuSparkles,
  LuAward,
  LuUsers,
  LuGlobe,
  LuBookOpen
} from 'react-icons/lu'

type TabType = 'vision' | 'mission' | 'goals'

interface ContentData {
  title: string
  subtitle: string
  badge: string
  description: string
  icon: React.ElementType
  points: {
    title: string
    description: string
    icon: React.ElementType
  }[]
}


const sectionData: Record<TabType, ContentData> = {
  vision: {
    title: 'Helping Students Build a Successful Future',
    subtitle: 'Our Commitment to Educational Excellence',
    badge: 'VISION 2030',
    description:
      'Our vision is to guide students towards the right educational opportunities by connecting them with suitable institutions and helping them make informed decisions about their future.',
    icon: LuEye,
    points: [
      {
        title: 'Global Education Opportunities',
        description:
          'Providing guidance for students pursuing medical, engineering, and management education in India and abroad, based on their goals and eligibility.',
        icon: LuGlobe,
      },
      {
        title: 'Student-Focused Guidance',
        description:
          'Offering personalised support to help every student choose suitable courses and institutions according to their interests, academic background, and career plans.',
        icon: LuAward,
      },
      {
        title: 'Honest & Transparent Guidance',
        description:
          'Maintaining transparency throughout the admission process while prioritising students’ needs, providing reliable information, and supporting them at every step.',
        icon: LuCheck,
      },
    ],
  },
  mission: {
    title: 'Supporting Students at Every Stage of Their Education',
    subtitle: 'Our Commitment to Quality Education',
    badge: 'OUR PURPOSE',
    description:
      'Our mission is to make the admission journey easier through clear information, suitable university options, and personalised guidance that helps students make confident decisions.',
    icon: LuTarget,
    points: [
      {
        title: 'Clear & Honest Counseling',
        description:
          'Helping students understand university options, tuition fees, admission requirements, and future career opportunities so they can make informed choices.',
        icon: LuUsers,
      },
      {
        title: 'Simple & Smooth Admission Process',
        description:
          'Providing step-by-step assistance with applications, document preparation, visa procedures, and accommodation planning for students and their families.',
        icon: LuBookOpen,
      },
      {
        title: 'Ongoing Student Support',
        description:
          'Guiding students before departure and after arrival, ensuring they receive the necessary support as they adjust to their new academic environment.',
        icon: LuCheck,
      },
    ],
  },
  goals: {
    title: 'Our Goals for Growth & Student Success',
    subtitle: 'Our Commitment to Educational Excellence',
    badge: 'TARGET OBJECTIVES',
    description:
      'We aim to support more students in reaching their academic goals, build strong relationships with reputed universities, and provide reliable guidance throughout the admission process.',
    icon: LuCompass,
    points: [
      {
        title: 'Supporting 10,000+ Students',
        description:
          'Working towards guiding more than 10,000 students to suitable universities and educational opportunities by the end of 2028.',
        icon: LuAward,
      },
      {
        title: 'Reliable Admission & Visa Guidance',
        description:
          'Helping students prepare accurate documents, understand eligibility requirements, and complete admission and visa procedures with proper guidance. Outcomes depend on university and visa authority decisions.',
        icon: LuCheck,
      },
      {
        title: 'Building a Strong University Network',
        description:
          'Expanding connections with recognised universities and colleges worldwide to provide students with more suitable options for medical, engineering, and management education.',
        icon: LuGlobe,
      },
    ],
  }}

export default function Mission(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<TabType>('vision')

  const activeContent = sectionData[activeTab]
  const MainIcon = activeContent.icon

  return (
    <section className="w-full bg-zinc-50 px-4 py-7 md:p-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight"
          >
            Vision, Mission & <span className="text-orange-600">S Goals</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed"
          >
Guided by honesty, trust, and student-focused support, we aim to help every learner make informed educational choices and achieve their future goals.
          </motion.p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-zinc-200/80 shadow-sm gap-2">
            {(['vision', 'mission', 'goals'] as TabType[]).map((tab) => {
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-3 rounded-xl text-xs sm:text-sm font-bold capitalize transition-colors duration-200 z-10 ${isActive ? 'text-white' : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-yellow-500 rounded-xl -z-10 shadow-md shadow-blue-500/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {tab === 'vision' && 'Our Vision'}
                  {tab === 'mission' && 'Our Mission'}
                  {tab === 'goals' && 'Our Goals'}
                </button>
              )
            })}
          </div>
        </div>

        {/* Animated Tab Content Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Box: Overview Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200/80 shadow-xl shadow-zinc-200/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-red-50 border border-red-100 text-red-600 flex items-center justify-center shadow-sm">
                    <MainIcon className="w-7 h-7 stroke-[1.8]" />
                  </div>
                  <span className="text-xs font-bold bg-blue-50 text-blue-600 px-3 py-1 rounded-full border border-blue-100">
                    {activeContent.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight">
                  {activeContent.title}
                </h3>

                <p className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                  {activeContent.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center gap-3 text-xs font-semibold text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Pradeep Consultancy Standard of Excellence</span>
              </div>
            </div>

            {/* Right Box: Key Points List */}
            <div className="lg:col-span-7 grid grid-cols-1 gap-4">
              {activeContent.points.map((point, index) => {
                const PointIcon = point.icon
                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="bg-white rounded-2xl p-6 border border-zinc-200/70 shadow-sm hover:border-blue-200 hover:shadow-md transition-all flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                      <PointIcon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-zinc-900">
                        {point.title}
                      </h4>
                      <p className="mt-1 text-zinc-600 text-xs sm:text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}