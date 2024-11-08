"use client";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const about = {
  title: "About me",
  description:
    "I am a passionate web developer with expertise in front-end and back-end development. With strong skills in HTML, CSS, JavaScript, React.js, and Next.js, I create responsive and user-friendly websites that deliver a seamless experience across all devices. I am also experienced in back-end technologies like Node.js and Express.js, enabling me to build efficient and scalable server-side applications.",
  info: [
    { fieldName: "Name", fieldValue: "Djellal Ramzi" },
    { fieldName: "Phone", fieldValue: "(+213) 659333013" },
    { fieldName: "Experience", fieldValue: "3 Years" },
    { fieldName: "Email", fieldValue: "djellal.ramzi.1995@gmail.com" },
    { fieldName: "Instagram", fieldValue: "djellal.ramzi" },
    { fieldName: "Nationality", fieldValue: "Algerian" },
    { fieldName: "Languages", fieldValue: "English , French , Arabic" },
  ],
};
const skills = {
  title: "My skills",
  description:
    "I specialize in full-stack web development, proficient in both front-end and back-end technologies. With a strong command of HTML, CSS, JavaScript, React.js, and Next.js, I create responsive, visually appealing, and user-friendly interfaces. On the back end, my expertise with Node.js, Express.js, and database systems like MongoDB and SQL allows me to build reliable, scalable server-side applications. I’m skilled in integrating RESTful APIs, ensuring smooth communication between systems, and utilizing Git for effective version control. My projects are crafted with performance, responsiveness, and modern design in mind, delivering seamless experiences across all devices.",
  skillsList: [
    { icon: <FaHtml5 />, name: "Html5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "Java Script" },
    { icon: <FaReact />, name: "React js" },
    { icon: <RiNextjsFill />, name: "Next js" },
    { icon: <RiTailwindCssFill />, name: "Tailwind css" },
    { icon: <FaBootstrap />, name: "bootstrap" },
    { icon: <FaNodeJs />, name: "node js" },
    { icon: <SiMongodb />, name: "mongodb " },
    { icon: <SiMysql />, name: "MySql" },
    { icon: <FaGithub />, name: " Git, GitHub" },
  ],
};
const experience = {
  title: "My experience",
  description:
    "I'm a freelance web developer on platforms like Upwork, Fiverr, and Freelancer.com, I have successfully delivered a range of projects that showcase my expertise in creating responsive and user-friendly websites. Proficient in HTML, CSS, JavaScript, and frameworks like React.js and Next.js, I focus on providing high-quality front-end solutions while also managing back-end development with Node.js and Express.js. My experience includes building RESTful APIs for seamless data integration, and I prioritize clear communication and collaboration with clients throughout the project lifecycle to ensure their vision is realized with precision and excellence.",
};
const educations = {
  title: "My Education",
  description:
    "I completed my undergraduate studies (Licence 3) in Information Systems at the University of Constantine 2, where i developed foundational skills in data management, systems analysis, and information technology. Building on this, i pursued a Master’s degree specializing in Information Systems and Web Technology, focusing on advanced methodologies in web development, data systems integration, and IT project management. This program provided i with in-depth knowledge of web technologies, software development, and digital transformation strategies.",
  carriere: [
    { date: "2014 - 2017", formation: "Information Systems" },
    {
      date: "2014 - 2017",
      formation: "Information Systems and Web Technology",
    },
  ],
};
function resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
      }}
      className=" flex justify-center items-center mt-[30px] xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="About Me"
          className="flex flex-col xl:flex-row gap-[60px] ">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="About Me">About Me</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="Experience">Experience</TabsTrigger>
          </TabsList>

          <div className="">
            <TabsContent
              value="About Me"
              className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60 text-sm">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w[620] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 xl:last:col-span-2 ">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl ">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="font-bold text-4xl">{skills.title}</h3>
                  <p className="max-w-[600px] text-sm text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4  xl:gap-[30px] gap-4">
                  {skills.skillsList.map((item, index) => {
                    return (
                      <li className="" key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-tahiti transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="education"
              className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-6 ">
                <h3 className="text-4xl  font-bold ">{educations.title}</h3>
                <div className=" text-white/60 max-w-[600px]  mb-6  text-center xl:text-left mx-auto xl:mx-0 tracking-tight text-sm  rounded-md  ">
                  {educations.description}
                </div>
                <div className="flex flex-col max-w-[650px] xl:flex-row  justify-around items-center gap-12 ">
                  {educations.carriere.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-[#27272c] rounded-md   h-[220px] mb-10 flex flex-col gap-4 justify-center items-center">
                        <h3 className="text-2xl font-semibold text-tahiti pt-2">
                          {item.date}
                        </h3>
                        <div className="flex flex-col gap-1 p-4">
                          <p className="text-white ">{item.formation}</p>
                          <p className="text-white/60">
                            at the University of Constantine 2{" "}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="Experience" className="w-full ">
              <div className="flex flex-col gap-6 ">
                <h3 className="text-4xl  font-bold  ">{experience.title}</h3>
                <div className="max-w-[600px] mx-auto xl:mx-0 text-white/60  text-center xl:text-left text-sm ">
                  {experience.description}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default resume;
