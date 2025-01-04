"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MyPhoto() {
  return (
    <div className="relative flex justify-center items-center w-full h-full">
      {/* Image container */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.6, ease: "easeInOut" },
        }}
      >
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 xl:w-80 xl:h-80 mix-blend-overlay">
          <Image
            src="/Ramzi.jpg"
            priority
            quality={100}
            fill
            alt="Picture of the author"
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
          />
        </div>
      </motion.div>

      {/* Circular animation */}
      <motion.svg
        className="absolute w-56 h-56 sm:w-72 sm:h-72 xl:w-96 xl:h-96"
        fill="none"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ strokeDasharray: "10 20" }}
          animate={{
            strokeDasharray: ["10 100", "40 150", "20 250"],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>
    </div>
  );
}
