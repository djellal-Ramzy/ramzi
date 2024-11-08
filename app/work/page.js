"use client";
import { useState } from "react";
import { motion } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderBtn from "@/components/SliderBtn";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    num: "01",
    category: "Frontend",
    project: "Dashboard",
    description:
      "The admin dashboard panel I developed is built with React.js and Material UI to offer a modern, intuitive interface for managing data and overseeing operations efficiently. The dashboard includes a clean, organized layout with various sections for real-time data insights, user management, product tracking, and analytics. With Material UI’s components, the interface is highly responsive and visually appealing, providing features like interactive charts, tables, filters, and customizable settings, all designed to enhance the admin's productivity and control over the platform.",
    stack: [
      { name: "Html5" },
      { name: "CSS#" },
      { name: "js" },
      { name: "React" },
      { name: "material ui" },
    ],
    image: "/adminPanel.png",
    live: "https://clever-zuccutto-443ef7.netlify.app/",
    github: "https://github.com/djellal-Ramzy/admin-panel",
  },
  {
    num: "02",
    category: "Backend",
    project: "E-commerce",
    description:
      "The e-commerce website built using React for the front-end and Node.js for the back-end. It offers a seamless shopping experience across various devices, with optimized layouts that adapt to different screen sizes, ensuring accessibility and ease of navigation on both mobile and desktop platforms.",
    stack: [
      { name: "Html5" },
      { name: "CSS#" },
      { name: "js" },
      { name: "React" },
      { name: "Node js" },
    ],
    image: "/backend.png",
    live: "https://resilient-sunshine-55da9f.netlify.app/",
    github: "https://github.com/djellal-Ramzy/dj-shop",
  },
  {
    num: "03",
    category: "RESTful API",
    project: "Weather Today",
    description:
      "I developed a simple interface using React that displays the daily weather for the city of Annaba. The application utilizes a RESTful API to fetch real-time weather data, updating automatically each day. The interface is clean and straightforward, providing users with essential weather information, such as temperature, humidity, and weather conditions, for easy and quick access.",
    stack: [
      { name: "Html5" },
      { name: "CSS#" },
      { name: "js" },
      { name: "React" },
      { name: "RESTful API" },
    ],
    image: "/meteo.png",
    live: "https://boisterous-cajeta-310326.netlify.app/",
    github: "https://github.com/djellal-Ramzy/meteo-annaba",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  function handelSlideChange(swipe) {
    const indexActive = swipe.activeIndex;
    setProject(projects[indexActive]);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      className="flex flex-col min-h-[80vh] justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w[50%] xl:h[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outLine">
                {project.num}
              </div>
              <h2 className="w-full text-[42px] font-bold leading-none text-white group-hover:text-tahiti  transition-all duration-500 capitalize">
                {" "}
                {project.category}
              </h2>
              <p className="text-white/60 text-sm">{project.description}</p>
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-nowrap text-xl text-tahiti ">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link
                  href={project.live}
                  passHref
                  target="_blank"
                  rel="noopener noreferrer">
                  <TooltipProvider
                    delayDuration={100}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        {" "}
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-tahiti group-hover:rotate-45" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        {" "}
                        <BsGithub className="text-white text-3xl group-hover:text-tahiti " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="">Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handelSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20"></div>

                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/20 z-10 "></div>
                    <div>
                      <Image
                        src={project.image}
                        fill
                        alt="alt"
                        className=" rounded-md "
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderBtn
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyle="bg-tahiti hover:bg-tahiti-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
