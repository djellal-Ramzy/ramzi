"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const ourServices = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      " I specialize in building responsive, interactive, and user-friendly interfaces using modern frameworks such as React.js and Next.js.",
  },

  {
    id: 3,
    title: "Back-End Development",
    description:
      " Skilled in server-side logic, I develop robust back-end services using Node.js and Express.js to support your web applications.",
  },
  {
    id: 3,
    title: "Database Management",
    description:
      " From database architecture to maintenance, I handle data storage with expertise in SQL and NoSQL databases for efficient management.",
  },
  {
    id: 4,
    title: "RESTful API ",
    description:
      "I design and develop RESTful APIs that enable smooth communication between client and server for web applications and services.",
  },
];
function services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-8 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {ourServices.map((item, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}>
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outLine text-transparent group-hover:text-outLine-hover">
                    {item.id}
                  </div>
                  <Link
                    href="/"
                    className="w-[70px] h-[70px] bg-white group-hover:bg-tahiti rounded-full flex justify-center items-center transition-all duration-500 hover:rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold text-white leading-none group-hover:text-tahiti  transition-all duration-500 ">
                  {item.title}
                </h2>
                <p className="text-white/60">{item.description}</p>
                <div className="border-b border-white/20 w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default services;
