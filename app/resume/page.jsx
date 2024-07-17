"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

// about data

const about = {
  title: "About me",
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
      fieldName: "Email",
      fieldValue: "tauhidhasan11@gmail.com",
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
  description: "2 years of experience",
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

const Resume = () => {
  const [experiences, setExperiences] = useState([]);
  const [skillData, setSkillData] = useState([]);

  console.log(experiences);
  console.log(skillData);

  useEffect(() => {
    fetch("https://portfolio-backend-one-ivory.vercel.app/api/experiences ")
      .then((response) => response.json())
      .then((data) => setExperiences(data));
  }, []);

  useEffect(() => {
    fetch("https://portfolio-backend-one-ivory.vercel.app/api/skills ")
      .then((response) => response.json())
      .then((data) => setSkillData(data));
  }, []);

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
            {/* <TabsTrigger value="education">Education</TabsTrigger> */}
            <TabsTrigger value="skills">Skills</TabsTrigger>
            {/* <TabsTrigger value="about">About me</TabsTrigger> */}
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
                    {experiences?.data?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[268px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/50">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-lg max-w-[268px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/50">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div>
                {/* <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div> */}
                <ul className="grid grid-cols-3 gap-[30px] sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] ">
                  {skillData?.data?.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={70} // Adjust the width and height as needed
                                height={70}
                                className="group-hover:text-accent transition-all duration-300"
                              />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
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
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/50 ">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[800px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/50">{item.fieldName}</span>
                        <span className="text-white text-xl">
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
