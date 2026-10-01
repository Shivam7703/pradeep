'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { LuExternalLink, LuNewspaper, LuSparkles } from 'react-icons/lu';

interface NewsItem {
  id: string;
  mediaName: string;
  logoText: string;
  headline: string;
  date: string;
  articleUrl: string;
  tag: string;
  accentColor: string;
}

const newsArticles: NewsItem[] = [
  {
    id: 'news-1',
    mediaName: 'The Times of India',
    logoText: 'TIMES OF INDIA',
    headline: 'Pradeep Consultancy Recognized Among Top Education Advisory Firms in India',
    date: 'August 2026',
    articleUrl: 'https://timesofindia.indiatimes.com',
    tag: 'Education Excellence',
    accentColor: 'from-red-600 to-rose-700',
  },
  {
    id: 'news-2',
    mediaName: 'The Economic Times',
    logoText: 'ECONOMIC TIMES',
    headline: 'Simplifying Higher Education Admissions: How Ethical Guidance is Changing the Industry',
    date: 'June 2026',
    articleUrl: 'https://economictimes.indiatimes.com',
    tag: 'Industry Leader',
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'news-3',
    mediaName: 'Aaj Tak',
    logoText: 'AAJ TAK',
    headline: 'Medical & Engineering Admissions: Key Advisory Insights for Aspirants',
    date: 'May 2026',
    articleUrl: 'https://aajtak.in',
    tag: 'Media Spotlight',
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'news-4',
    mediaName: 'NDTV Education',
    logoText: 'NDTV EDUCATION',
    headline: 'A Complete Guide for Students Planning Higher Education in Accredited Institutions',
    date: 'March 2026',
    articleUrl: 'https://ndtv.com/education',
    tag: 'Career Trends',
    accentColor: 'from-zinc-700 to-zinc-900',
  },
];

// Brand logos bar (Ticker/Grid)
const mediaLogos = [
  { name: 'Times of India', text: 'THE TIMES OF INDIA' },
  { name: 'Economic Times', text: 'The Economic Times' },
  { name: 'Aaj Tak', text: 'आज तक' },
  { name: 'NDTV', text: 'NDTV' },
  { name: 'Dainik Bhaskar', text: 'दैनिक भास्कर' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FeaturedIn(): React.JSX.Element {
  return (
    <section className="w-full bg-white px-4 py-7 md:p-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-700 border border-blue-200/60 mb-3"
          >
            <LuSparkles className="w-3.5 h-3.5" /> Media Coverage
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl  font-semibold text-zinc-900 tracking-tight"
          >
            Featured In <span className="text-orange-600">Leading Media</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-zinc-600 text-sm sm:text-base leading-relaxed"
          >
            Read what national news channels and reputed publications say about our work in education consultancy.
          </motion.p>
        </div>


        {/* Featured News Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {newsArticles.map((article) => (
            <motion.a
              key={article.id}
              href={article.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200/80 shadow-lg shadow-zinc-200/40 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
            >


              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <LuNewspaper className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold text-zinc-900 tracking-wide">
                      {article.mediaName}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-zinc-600 bg-zinc-100 px-2.5 py-0.5 rounded-md">
                    {article.date}
                  </span>
                </div>

                {/* Article Headline */}
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 group-hover:text-red-600 transition-colors leading-snug">
                  {article.headline}
                </h3>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {article.tag}
                </span>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 group-hover:text-blue-600 transition-colors">
                  <span>Read Article</span>
                  <LuExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}