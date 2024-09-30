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

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "fullStack",
    title: "Property management system",
    description:
      "Property management portal is a web-based java project where house owners and customers can exchange information effectively and inexpensively. This system provides a user-friendly interface by utilizing ReactJS, Spring Boot, Hibernate and PostgreSQL.",
    stack: [
      { name: "React.js" },
      { name: "Spring Boot" },
      { name: "Hibernate" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/waaProject.png",
    github: "https://github.com/hnin-hnin-wai/MIU-WAA-Final-Project",
  },
  {
    num: "02",
    category: "Backend",
    title: "Electronic Badge/Attendance System",
    description:
      "The system either allows or denies access based on built-in rules and keeps track of attendance. It was developed using Spring, Spring MVC, Spring Boot, Spring Data JPA, and Spring Cloud Services to create a RESTful system of microservices.",
    stack: [
      { name: "Spring Boot" },
      { name: "Spring MVC" },
      { name: "Spring JPA" },
      { name: "Java" },
    ],
    image: "/assets/work/eaProject.png",
    github: "https://github.com/hnin-hnin-wai/MIU-EA-Final-Project",
  },

  {
    num: "03",
    category: "Cloud Computing",
    title: "Product Management System",
    description:
      "Product management system is a web-based application where sellers can create products and customers can buy these products. Deploy frontend React.js application into S3 bucket, backend Spring boot project in EC2 instance and database was MySQL in AWS. Build a fault-tolerant, highly scalable and production-ready API on the cloud.",
    stack: [
      { name: "React.js" },
      { name: "Spring Boot" },
      { name: "AWS (EC2,S3,VPC,RDS)" },
    ],
    image: "/assets/work/ccProject.png",
    github:
      "https://github.com/hnin-hnin-wai/MIU-Cloud-Computing-Final-Project",
  },
];

const Project = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    //update project state based on current slide index
    setProject(projects[currentIndex]);
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
          <div className="w-full xl:w-[50%] xl:h-[468px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60 text-justify">
                {project.description}
              </p>
              {/*  stack */}
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* github project button */}
                <Link href={project.github} target="_">
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
              slidePerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* image */}
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
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max sl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Project;
