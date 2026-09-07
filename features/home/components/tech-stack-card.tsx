"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import type { TechStackItem } from "../data/tech-stack-data";

export type { TechStackItem };

interface TechStackCardProps {
  tech: TechStackItem;
  index: number;
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.86,
    y: 16,
    filter: "blur(4px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 22,
      mass: 0.8,
      delay: i * 0.028,
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.88,
    y: -8,
    filter: "blur(3px)",
    transition: {
      duration: 0.18,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

export function TechStackCard({ tech, index }: TechStackCardProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      whileHover={{
        y: -3,
        scale: 1.02,
        transition: { type: "spring", stiffness: 420, damping: 24 },
      }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 hover:bg-white border border-slate-200/80 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all duration-200 cursor-default overflow-hidden select-none"
      style={{
        boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.03)",
      }}
    >
      {/* Soft color glow accent on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${tech.color}18 0%, transparent 70%)`,
        }}
      />

      {/* Glossy light streak sweep on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

      {/* Official SVGL Icon Tile with spring-loaded entrance & playful hover rotation */}
      <motion.div
        initial={{ scale: 0.65, opacity: 0, rotate: -8 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 18,
          delay: index * 0.028 + 0.05,
        }}
        className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 p-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10"
        style={{
          backgroundColor: `${tech.color}14`,
          boxShadow: `0 2px 8px -2px ${tech.color}25`,
        }}
      >
        <img
          src={tech.logoSrc}
          alt={`${tech.name} logo`}
          width={24}
          height={24}
          className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </motion.div>

      {/* Label & Role with staggered slide-fade entrance */}
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.28,
          ease: "easeOut",
          delay: index * 0.028 + 0.08,
        }}
        className="min-w-0 flex-1 relative z-10"
      >
        <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-slate-950 truncate block leading-tight transition-colors">
          {tech.name}
        </span>
        <span className="text-[10px] sm:text-[11px] text-slate-500 font-mono truncate block mt-0.5">
          {tech.role}
        </span>
      </motion.div>
    </motion.div>
  );
}
