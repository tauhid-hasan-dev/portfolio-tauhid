"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import WorkSliderBtn from "../../components/WorkSliderBtns";

import Image from "next/image";
import Link from "next/link";

/* {
  num: "01",
  category: "Full Stack",
  title: "Pet Love",
  description: "A pet adoption platform",
  stack: [
    { name: "NextJs" },
    { name: "TypeScript" },
    { name: "NodeJs" },
    { name: "Express" },
    { name: "Prisma" },
    { name: "PostgreSQL" },
  ],
  image: "https://i.ibb.co/Z241dJ6/pet-love.png",
  live: "https://pet-love-eight.vercel.app/",
  githubServer: "https://github.com/tauhid-hasan-dev/pet-love-backend",
  githubClient: "https://github.com/tauhid-hasan-dev/pet-love-client",
}, */

/* {
  num: "02",
  category: "Full Stack",
  title: "Rare Books",
  description: "A rare and old book store - buy & sell",
  stack: [
    { name: "ReactJs" },
    { name: "Javascript" },
    { name: "NodeJs" },
    { name: "Express" },
    { name: "MongoDB" },
  ],
  image: "https://i.ibb.co/S7pLv9h/rarebooks.png",
  live: "https://used-book-store-90b6b.web.app/",
  githubServer: "https://github.com/tauhid-hasan-dev/used-books-server",
  githubClient: "https://github.com/tauhid-hasan-dev/used-books-client",
}, */

/* {
  num: "03",
  category: "Full Stack",
  title: "Zaha Hadid Architect",
  description: "Professional Service based web app",
  stack: [
    { name: "ReactJs" },
    { name: "Javascript" },
    { name: "NodeJs" },
    { name: "Express" },
    { name: "MongoDb" },
  ],
  image: "https://i.ibb.co/rcsm7nf/zaha-hadid.png",
  live: "https://architect-tauhid-hasan.web.app/",
  githubServer: "https://github.com/tauhid-hasan-dev/architect-zaha-hadid-server",
  githubClient: "https://github.com/tauhid-hasan-dev/architect-zaha-hadid-client",
}, */

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Pet Love",
    description: "A pet adoption platform",
    stack: [
      { name: "NextJs" },
      { name: "TypeScript" },
      { name: "NodeJs" },
      { name: "Express" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "NextJs" }, { name: "Tailwind CSS" }, { name: "NodeJs" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "project 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "NextJs" }, { name: "Tailwind CSS" }, { name: "NodeJs" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [projectData, setProjectData] = useState([]);

  const handleSlideChange = (swiper) => {
    const currentindex = swiper.activeIndex;
    setProject(projects[currentindex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                <div>{project.num}</div>
              </div>
              {/*  project category */}
              <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/*  project description */}
              <p className="text-white/50">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*      slider button */}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
