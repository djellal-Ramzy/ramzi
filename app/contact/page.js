"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaMapMarkedAlt />,
    title: "Phone",
    description: "+213659333013",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "djellal.ramzi.1995@gmail.com",
  },
  ,
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Alger , Algeria",
  },
];

function contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-tahiti ">let's work together</h3>
              <p className="text-white/60">
                Hi there! I'm a skilled web developer with a passion for
                building high-quality, responsive websites tailored to your
                business needs. Whether you need a sleek front-end, a powerful
                back-end, or an efficient full-stack solution, I’m here to help
                bring your vision to life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="firstname" />
                <Input type="lastname" placeholder="lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here "
              />
              <Button size="md" className="max-w-40 ">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex xl:justify-end items-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-10">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-27272c text-tahiti rounded-md flex items-center justify-center ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default contact;
