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
    title: 'Empowering Student Futures Globally',
    subtitle: 'Our Vision',
    badge: 'VISION 2030',
    description:
      'To become the most trusted global education consultancy, bridging the gap between ambitious students and world-class educational institutions.',
    icon: LuEye,
    points: [
      {
        title: 'Global Recognition',
        description: 'Establishing transparent pathways for medical, engineering, and management aspirants across 15+ countries.',
        icon: LuGlobe,
      },
      {
        title: 'Student-Centric Excellence',
        description: 'Creating a ecosystem where every student receives unbiased, quality guidance tailored to their career aspirations.',
        icon: LuAward,
      },
      {
        title: 'Ethical Leadership',
        description: 'Setting industry benchmarks in transparency, admission ethics, and student welfare support.',
        icon: LuCheck,
      },
    ],
  },
  mission: {
    title: 'Guiding Every Step Toward Academic Success',
    subtitle: 'Our Mission',
    badge: 'OUR PURPOSE',
    description:
      'To deliver end-to-end transparent admission guidance, empowering students with accurate insights, university options, and personalized counseling.',
    icon: LuTarget,
    points: [
      {
        title: 'Transparent Counseling',
        description: 'Providing clear, honest advice on university selection, fees, eligibility, and post-degree career prospects.',
        icon: LuUsers,
      },
      {
        title: 'Hassle-Free Admissions',
        description: 'Simplifying complex application, documentation, visa, and accommodation processes for students and parents.',
        icon: LuBookOpen,
      },
      {
        title: 'Lifelong Student Support',
        description: 'Offering continuous pre-departure and post-landing guidance throughout the student’s academic journey.',
        icon: LuCheck,
      },
    ],
  },
  goals: {
    title: 'Measurable Impact & Future Milestones',
    subtitle: 'Our Goals',
    badge: 'TARGET OBJECTIVES',
    description:
      'Our targeted milestones focus on maximizing student satisfaction, expanding university tie-ups, and ensuring 100% visa success.',
    icon: LuCompass,
    points: [
      {
        title: '10,000+ Successful Placements',
        description: 'Aiming to guide over 10,000 students into top-tier universities by the end of 2028.',
        icon: LuAward,
      },
      {
        title: '100% Visa & Admission Success Rate',
        description: 'Maintaining flawless documentation checks to guarantee maximum success in visa processing.',
        icon: LuCheck,
      },
      {
        title: 'Expanding University Networks',
        description: 'Partnering directly with 200+ NMC, WHO, and UGC-accredited colleges worldwide.',
        icon: LuGlobe,
      },
    ],
  },
}

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
            Vision, Mission & <span className="text-orange-600">Strategic Goals</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed"
          >
            Built on integrity, transparency, and a commitment to helping students achieve their educational dreams.
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