'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, Variants } from 'framer-motion';
import {
  LuCalendar,
  LuClock,
  LuUser,
  LuArrowRight,
} from 'react-icons/lu';
import { banner1, banner2 } from '@/assets';
import { RiArticleFill } from 'react-icons/ri';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: StaticImageData;
  slug: string;
}

const blogs: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Top 5 Medical Universities in Uzbekistan for Indian Students 2026',
    excerpt: 'Complete guide on fee structures, NMC approval, accommodation, and FMGE passing rates in Tashkent & Samarkand.',
    category: 'MBBS Abroad',
    author: 'Counselor Pradeep',
    date: 'Sep 20, 2026',
    readTime: '5 min read',
    image: banner1,
    slug: 'top-medical-universities-uzbekistan-2026',
  },
  {
    id: 'blog-2',
    title: 'JEE Main vs Direct College Admissions: Choosing the Right Career Path',
    excerpt: 'Understand engineering entrance cut-offs, management quota options, and top private B.Tech institute pathways.',
    category: 'Engineering',
    author: 'Academic Team',
    date: 'Sep 18, 2026',
    readTime: '4 min read',
    image: banner2,
    slug: 'jee-main-vs-direct-admissions-guide',
  },
  {
    id: 'blog-3',
    title: 'MBA Admission Guide 2026: CAT, MAT, & B-School Selection Strategy',
    excerpt: 'How to prepare for GD-PI rounds and choose specialized MBA/PGDM programs with high ROI placement packages.',
    category: 'Management',
    author: 'Career Coach',
    date: 'Sep 12, 2026',
    readTime: '6 min read',
    image: banner1,
    slug: 'mba-admission-guide-cat-mat-strategy',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
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

export default function BlogSection(): React.JSX.Element {
  return (
    <section className="w-full bg-white px-4 py-7 md:p-14 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100 mb-3">
              <RiArticleFill className="w-3.5 h-3.5" /> Latest Articles & Guides
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-900 tracking-tight">
              News & <span className="text-orange-600">Admission Insights</span>
            </h2>
            <p className="mt-3 text-zinc-600 text-sm sm:text-base leading-relaxed">
              Stay updated with expert advice, admission updates, university reviews, and career counseling tips.
            </p>
          </div>

          <a
            href="/blogs"
            className="inline-flex items-center justify-center border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 font-semibold px-5 py-2.5 rounded-xl text-sm transition-all shadow-sm self-start md:self-auto shrink-0"
          >
            View All Articles
          </a>
        </div>

        {/* 3 Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-zinc-50 rounded-2xl overflow-hidden border border-zinc-100 shadow-lg shadow-zinc-100 flex flex-col justify-between transition-shadow hover:shadow-xl group"
            >
              <div>
                {/* Image & Category Badge */}
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />

                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-xs font-medium text-zinc-500 mb-3">
                    <span className="flex items-center gap-1">
                      <LuCalendar className="w-3.5 h-3.5 text-blue-600" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <LuClock className="w-3.5 h-3.5 text-blue-600" />
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    <a href={`/blogs/${blog.slug}`}>{blog.title}</a>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-zinc-600 text-xs sm:text-sm mt-2.5 line-clamp-3 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-zinc-200/60 mt-4 pt-4">
                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-700">
                  <LuUser className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{blog.author}</span>
                </div>

                <a
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                >
                  Read More <LuArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}