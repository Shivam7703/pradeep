"use client";

import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { globalbanner } from "@/assets"; // Fallback image import



// Defined sliderText animation variants
const sliderTextVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Banner({ title, para , slug }:any) {
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <div className="relative h-max w-full">
          {/* Background Image */}
          <Image
            className="h-[30vw] min-h-[440px] w-full object-cover object-top"
            src={globalbanner}
            alt={title || "Banner Image"}
            priority
          />

          {/* Dark Overlay with Blur/Content */}
          <div className="overlay absolute inset-0 flex h-full w-full items-center bg-black/40 text-white">
            <motion.div
              variants={sliderTextVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="my-auto flex w-full flex-col max-md:items-center max-md:justify-center max-md:p-[8%] max-md:text-center md:ml-28 md:w-1/2"
            >
              {title && (
                <motion.h2 className="mb-6 text-4xl font-bold leading-tight lg:text-6xl">
                  {title}
                </motion.h2>
              )}

              {para && (
                <motion.p className="max-w-2xl text-base text-gray-100 md:text-lg">
                  {para}
                </motion.p>
              )}

              {/* Breadcrumb Navigation (Optional) */}
              {slug && (
                <motion.div className="mt-7 w-max rounded-full bg-black/30 px-6 py-2.5 text-sm font-medium backdrop-blur-md">
                  Home &nbsp;/&nbsp;{" "}
                  <span className="font-bold text-blue-400">
                    {slug.length > 25 ? `${slug.slice(0, 25)}...` : slug}
                  </span>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}