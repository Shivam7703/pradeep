"use client"
import { banner1, banner2 } from '@/assets';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { LuArrowRight, LuCheck, LuChevronLeft, LuChevronRight, LuClock, LuGraduationCap, LuIndianRupee, } from 'react-icons/lu';


const mbbsCountries = [
  {
    id: 'uzbekistan',
    name: 'Uzbekistan',
    tagline: 'Top choice for affordable & modern medical studies',
    budget: '₹15 - ₹25 Lakhs',
    duration: '6 Years (Inc. Internship)',
    medium: '100% English',
    badge: 'Most Popular',
    color: 'from-blue-600 to-indigo-700',
    image: banner1,
    highlights: [
      'NMC & WHO Approved Curriculum',
      'High FMGE/NExT Passing Rates',
      'Low Cost of Living & Safe Environment',
      'Direct Flights from India (2.5 Hours)'
    ],
    popularUniversities: ['Tashkent Medical Academy', 'Samarkand State Medical University', 'Bukhara State Medical Institute']
  },
  {
    id: 'russia',
    name: 'Russia',
    tagline: 'World-renowned medical education with rich legacy',
    budget: '₹22 - ₹35 Lakhs',
    duration: '6 Years',
    medium: 'English',
    badge: 'High Clinical Exposure',
    color: 'from-red-600 to-rose-700',
    image: banner2,
    highlights: [
      'Globally Recognized Medical Degrees',
      'State-funded Government Hospitals',
      'Advanced Research & Diagnostic Labs',
      'Indian Mess Available in Hostels'
    ],
    popularUniversities: ['Kazan Federal University', 'Bashkir State Medical University', 'Crimea Federal University']
  },
  {
    id: 'kazakhstan',
    name: 'Kazakhstan',
    tagline: 'Quality medical degree with practical clinical exposure',
    budget: '₹18 - ₹30 Lakhs',
    duration: '5 + 1 Year Internship',
    medium: 'English',
    badge: 'Budget Friendly',
    color: 'from-cyan-600 to-blue-700',
    image: banner1,
    highlights: [
      'Top-Ranked National Medical Universities',
      'Simple Visa & Admission Process',
      'Modern Campus Facilities & Hostels',
      'Focus on Clinical Rotations'
    ],
    popularUniversities: ['Kazakh National Medical University', 'Astana Medical University', 'Semey State Medical University']
  },
  {
    id: 'georgia',
    name: 'Georgia',
    tagline: 'European standard medical studies with 100% English medium',
    budget: '₹30 - ₹45 Lakhs',
    duration: '6 Years',
    medium: '100% English',
    badge: 'European Standard',
    color: 'from-amber-600 to-orange-700',
    image: banner2,
    highlights: [
      'European Credit Transfer System (ECTS)',
      'Highly Safe Country for Male & Female Students',
      'No Donation or Entrance Test',
      'Preparation for USMLE & PLAB Integrated'
    ],
    popularUniversities: ['Tbilisi State Medical University', 'Georgia State University', 'Batumi Shota Rustaveli University']
  },
  {
    id: 'kyrgyzstan',
    name: 'Kyrgyzstan',
    tagline: 'Most economical option for aspiring Indian doctors',
    budget: '₹15 - ₹28 Lakhs',
    duration: '5 Years',
    medium: 'English',
    badge: 'Lowest Budget',
    color: 'from-emerald-600 to-teal-700',
    image: banner2,
    highlights: [
      '5-Year Compact Course Duration',
      'Large Community of Indian Medical Students',
      'Affordable Tuition Fee Installment Plans',
      'Indian Faculty Available for FMGE Coaching'
    ],
    popularUniversities: ['Osh State University', 'International School of Medicine (ISM)', 'Jalal-Abad State University']
  }
];

export default function MbbsCountrySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const activeCountry = mbbsCountries[currentIndex];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mbbsCountries.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % mbbsCountries.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + mbbsCountries.length) % mbbsCountries.length);
  };

  return (
    <section className="bg-zinc-50 px-4 py-7 md:p-14 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
            Explore Top <span className="text-orange-600">MBBS Abroad</span> Countries
          </h2>
          <p className="mt-3 text-base text-zinc-600 max-w-2xl mx-auto">
            Guidance curated by Career Coach Pradeep for Indian medical aspirants seeking quality education within budget.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 pb-2 justify-start sm:justify-center border-b border-zinc-200">
          {mbbsCountries.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`px-5 py-2.5 rounded-t-lg font-medium text-sm transition-all whitespace-nowrap flex items-center gap-2 border-b-2 ${idx === currentIndex
                ? 'border-blue-600 bg-white text-blue-600 shadow-sm'
                : 'border-transparent text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Main Card Slider Stage */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-zinc-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-120">

            {/* Visual Hero Image & Badges */}
            <div className="lg:col-span-5 relative min-h-65 lg:min-h-full overflow-hidden">
              <Image
                src={activeCountry.image}
                alt={`MBBS in ${activeCountry.name}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />

              <div className="absolute top-4 left-4">
                <span className="bg-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {activeCountry.badge}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-3xl font-extrabold">{activeCountry.name}</h3>
                <p className="text-sm text-zinc-200 mt-1">{activeCountry.tagline}</p>
              </div>
            </div>

            {/* Detailed Content Panel */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-xl shadow-lg shadow-zinc-200">
                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-1 text-yellow-600 text-xs mb-1 justify-center font-bold sm:justify-start">
                      <LuIndianRupee className="w-3.5 h-3.5" /> Total Budget
                    </div>
                    <div className=" text-zinc-900 text-sm sm:text-base">{activeCountry.budget}</div>
                  </div>

                  <div className="text-center sm:text-left border-x border-zinc-300 px-2">
                    <div className="flex items-center gap-1 text-green-600 font-bold text-xs mb-1 justify-center sm:justify-start">
                      <LuClock className="w-3.5 h-3.5" /> Duration
                    </div>
                    <div className=" text-zinc-900 text-sm sm:text-base">{activeCountry.duration}</div>
                  </div>

                  <div className="text-center sm:text-left">
                    <div className="flex items-center gap-1 text-red-600 text-xs mb-1 font-bold justify-center sm:justify-start">
                      <LuGraduationCap className="w-3.5 h-3.5" /> Medium
                    </div>
                    <div className=" text-zinc-900 text-sm sm:text-base">{activeCountry.medium}</div>
                  </div>
                </div>

                {/* Key Highlights */}
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-3">Key Highlights</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {activeCountry.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-zinc-700">
                      <LuCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Top Universities */}
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider mb-2">Top Recommended Universities</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeCountry.popularUniversities.map((uni, idx) => (
                    <span key={idx} className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-medium px-3 py-1.5 rounded-md transition-colors">
                      {uni}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 transition-all"
                >
                  Apply / Inquire for {activeCountry.name} <LuArrowRight className="w-4 h-4" />
                </button>

                {/* Slider Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Country"
                    className="p-2.5 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition"
                  >
                    <LuChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-medium text-zinc-500 px-1">
                    {currentIndex + 1} / {mbbsCountries.length}
                  </span>
                  <button
                    onClick={handleNext}
                    aria-label="Next Country"
                    className="p-2.5 rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-100 transition"
                  >
                    <LuChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}