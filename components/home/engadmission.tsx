'use client';

import React, { useState } from 'react';
import { IconType } from 'react-icons';
import {
  LuGraduationCap,
  LuCheckCheck,
  LuBriefcase,
  LuAward,
  LuBuilding2,
  LuBookOpen,
  LuArrowRight,
  LuShieldCheck,
  LuUserCheck,
  LuX
} from 'react-icons/lu';

interface HighlightPoint {
  title: string;
  desc: string;
}

interface AdmissionCategory {
  id: 'engineering' | 'management';
  title: string;
  subtitle: string;
  badge: string;
  icon: IconType;
  highlights: HighlightPoint[];
  popularColleges: string[];
}

const admissionsData: AdmissionCategory[] = [
  {
    id: 'engineering',
    title: 'Engineering (B.Tech / M.Tech)',
    subtitle: 'Top Engineering Institutions & Entrance Pathways',
    badge: 'High Demand',
    icon: LuGraduationCap,
    highlights: [
      {
        title: 'National & State Exams',
        desc: 'Admissions guided by JEE Main, JEE Advanced, MHT-CET, WBJEE, COMEDK, and KCET.'
      },
      {
        title: 'Top Private Universities',
        desc: 'Direct pathways via exams like BITSAT, VITEEE, SRMJEEE, MET, and KIITEE.'
      },
      {
        title: 'Trending Specializations',
        desc: 'Computer Science (CSE), AI & ML, Data Science, Cyber Security, Robotics, & VLSI.'
      },
      {
        title: 'Eligibility Criteria',
        desc: 'Minimum 45% - 60% aggregate in PCM (Physics, Chemistry, Maths) in Class 12th + Entrance Qualification.'
      },
      {
        title: 'Management & NRI Quota',
        desc: 'Direct admission assistance under Institutional Level & Management Quota seats in top institutes.'
      }
    ],
    popularColleges: ['IITs / NITs / IIITs', 'BITS Pilani', 'VIT Vellore', 'Manipal Institute (MIT)', 'SRM Institute']
  },
  {
    id: 'management',
    title: 'Management (MBA / PGDM / BBA)',
    subtitle: 'Premier B-Schools & Specialized Management Programs',
    badge: 'High ROI',
    icon: LuBriefcase,
    highlights: [
      {
        title: 'Premier Entrance Exams',
        desc: 'Shortlisting based on CAT, XAT, CMAT, MAT, NMAT, SNAP, and ATMA overall percentile scores.'
      },
      {
        title: 'Undergraduate Programs',
        desc: 'BBA & Integrated 5-Year IPM programs via IPMAT, JIPMAT, CUET-UG, and NPAT.'
      },
      {
        title: 'Core & Specialized Electives',
        desc: 'Marketing, Finance, Business Analytics, Human Resources, Operations, & Supply Chain.'
      },
      {
        title: 'Selection Rounds',
        desc: 'Comprehensive preparation support for GD (Group Discussion), WAT (Writing Test), & Personal Interview (PI).'
      },
      {
        title: 'Corporate Placement Focus',
        desc: 'Selection guidance targeting institutes with strong corporate exposure and placement records.'
      }
    ],
    popularColleges: ['IIMs (CAT Requiorange)', 'XLRI Jamshedpur', 'NMIMS Mumbai', 'SIBM Pune', 'Great Lakes']
  }
];

export default function AdmissionsIndiaSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<'engineering' | 'management'>('engineering');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentData = admissionsData.find((item) => item.id === activeTab) || admissionsData[0];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert('Enquiry submitted!');
    setIsModalOpen(false);
  };

  return (
    <section className="bg-zinc-50 px-4 py-7 md:p-14 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <LuShieldCheck className="w-4 h-4" /> Admission Guidance 2026–27
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
            Engineering & Management <span className="text-orange-600">Admissions in India</span>
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Expert counseling for premier B.Tech, MBA, BBA, and PGDM institutions across India. Secure your dream college with complete entrance and admission support.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-10">
          <div className="bg-zinc-200/80 p-1.5 rounded-xl inline-flex gap-2">
            {admissionsData.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-lg font-semibold text-sm transition-all ${activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.title.split(' ')[0]} Admissions
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-zinc-100 overflow-hidden">
          <div className="p-6 sm:p-10">

            {/* Card Title & Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-100">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  {currentData.badge} Program
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 mt-1">
                  {currentData.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-0.5">{currentData.subtitle}</p>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-orange-600 text-white font-medium px-5 py-2.5 rounded-lg text-sm flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all"
              >
                Get Counseling Call <LuArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pointers Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentData.highlights.map((point, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <LuCheckCheck className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 text-sm sm:text-base">
                        {point.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Top Recommended Institutes */}
            <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-wider shrink-0">
                <LuBuilding2 className="w-4 h-4 text-blue-600" /> Key Participating Institutes:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentData.popularColleges.map((college, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-100 text-zinc-700 text-xs font-semibold px-3 py-1.5 rounded-md border border-zinc-200/60"
                  >
                    {college}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Feature Strip */}
        <div className="mt-8 flex flex-wrap justify-between">
          <div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
            <LuAward className="w-8 h-8 text-blue-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-zinc-900">Entrance Preparation</div>
              <div className="text-xs text-zinc-500">Cut-off guidance & score mapping</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
            <LuUserCheck className="w-8 h-8 text-blue-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-zinc-900">Management Quota</div>
              <div className="text-xs text-zinc-500">Institutional direct seats guidance</div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-zinc-100 flex items-center gap-3">
            <LuBookOpen className="w-8 h-8 text-blue-600 shrink-0" />
            <div>
              <div className="text-xs font-bold text-zinc-900">GD-PI Assistance</div>
              <div className="text-xs text-zinc-500">Mock interviews for top B-Schools</div>
            </div>
          </div>
        </div>

      </div>

      {/* Direct Admission Lead Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 p-1"
            >
              <LuX className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-zinc-900">Enquire for Admissions</h3>
            <p className="text-xs text-zinc-500 mt-1 mb-4">
              Get detailed college cut-offs, fee structures, and seat matrix information.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Student Name</label>
                <input requiorange type="text" placeholder="Enter full name" className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Phone / WhatsApp</label>
                <input requiorange type="tel" placeholder="+91 98765 43210" className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-medium text-zinc-700 mb-1">Course Interested In</label>
                <select className="w-full px-3 py-2 border border-zinc-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>B.Tech / Engineering</option>
                  <option>MBA / PGDM</option>
                  <option>BBA / IPMAT</option>
                  <option>M.Tech</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg text-sm shadow transition"
              >
                Request Free Guidance
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}