"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

// about data

const about = {
  title: "about me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolor.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Tauhid Hasan",
    },
    {
      fieldName: "Phone",
      fieldValue: "+905076260228",
    },
    {
      fieldName: "Experience",
      fieldValue: "2.5 Years",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Turkish",
    },
  ],
};

// Experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolor.",
  items: [
    {
      company: "Altor Danismanlik",
      position: "Full Stack Developer",
      duration: "December 2023 - Present",
    },
    {
      company: "Avocado10 Technology",
      position: "Frontend Developer",
      duration: "January 2023 - October 2023",
    },
    {
      company: "Workcube",
      position: "Frontend Developer",
      duration: "January 2023 - April 2023",
    },
    {
      company: "Gramoni",
      position: "Frontend Developer",
      duration: "August 2021 - December 2022",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolor.",
  items: [
    {
      institution: "Anadolu University",
      degree: "Bachelor of Architecture",
      duration: "2013-2018",
    },
    {
      institution: "Programming Hero",
      degree: "Advanced Full Stack Web Development Boot Camp",
      duration: "December 2023- July 2024",
    },
    {
      institution: "Programming Hero",
      degree: "Full Stack Web Development Boot Camp",
      duration: "July 2022- December 2022",
    },
    {
      institution: "Kodluyoruz",
      degree: "Frontend Web Development Boot Camp",
      duration: "December 2023- July 2023",
    },
  ],
};

// Skills data

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolor.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "Html5",
    },
    {
      icon: <FaNodeJs />,
      name: "Html5",
    },
    {
      icon: <FaJs />,
      name: "Html5",
    },
    {
      icon: <FaReact />,
      name: "Html5",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
