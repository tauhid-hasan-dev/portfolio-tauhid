"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList>
            <TabsTrigger>Experience</TabsTrigger>
            <TabsTrigger>Education</TabsTrigger>
            <TabsTrigger>Skills</TabsTrigger>
            <TabsTrigger>About me</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
