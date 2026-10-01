'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

interface StatItem {
  id: string;
  count: number;
  label: string;
  linkText: string;
  linkHref: string;
  hasCommas?: boolean;
}

const statsData: StatItem[] = [
  {
    id: 'online-courses',
    count: 769,
    label: 'Online\nCourses',
    linkText: 'Learn More >',
    linkHref: '/courses',
    hasCommas: true,
  },
  {
    id: 'free-tutorials',
    count: 637,
    label: 'Free Online\nTutorials',
    linkText: 'Discover More >',
    linkHref: '/tutorials',
  },
  {
    id: 'ebooks',
    count: 942,
    label: 'eBooks\nAvailable',
    linkText: 'Discover More >',
    linkHref: '/ebooks',
  },
];

// Sub-component to handle animated countup per item
function AnimatedNumber({ value, hasCommas }: { value: number; hasCommas?: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // milliseconds
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out cubic function for smooth slowing effect at the end
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOutProgress * value);

      setDisplayValue(currentCount);

      if (frame === totalFrames) {
        clearInterval(counter);
        setDisplayValue(value);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [isInView, value]);

  const formattedNumber = hasCommas
    ? displayValue.toLocaleString('en-US')
    : displayValue;

  return <span ref={ref}>{formattedNumber}</span>;
}

export default function StatsCounter(): React.JSX.Element {
  return (
    <section className="w-full bg-yellow-400 py-10 px-4 sm:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
          {statsData.map((item, index) => (
            <div
              key={item.id}
              className={`flex items-center justify-center gap-5 sm:gap-6 px-4 ${index !== 0 ? 'md:border-l md:border-black/20' : ''
                }`}
            >
              {/* Animated Counter Number */}
              <div className="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#1d2025] tracking-tight shrink-0">
                <AnimatedNumber value={item.count} hasCommas={item.hasCommas} />+
              </div>

              {/* Text Label & Action Link */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-700 leading-snug whitespace-pre-line">
                  {item.label}
                </h3>
                <Link
                  href={item.linkHref}
                  className="mt-1 text-xs sm:text-sm font-semibold text-[#2f343a] hover:text-black transition-colors underline-offset-2 hover:underline"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}