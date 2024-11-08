"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function MyPhoto() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="w-[298px] h-[298px] xl:w-[460px] xl:h[460px]  xl:mt-6 mix-blend-overlay  absolute">
          <Image
            src="/Ramzi.png"
            priority
            quality={100}
            fill
            alt="Picture of the author"
            className="object-contain "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>
      <motion.svg
        className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        {" "}
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          strokeWidth="4"
          strokeLinejoin="round"
          strokeLinecap="round"
          initial={{ strokeDasharray: "24 10 0 0 " }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22"],
            rotate: [120, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.svg>
    </div>
  );
}
