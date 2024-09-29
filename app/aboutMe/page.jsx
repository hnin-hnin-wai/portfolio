"use client";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

//about data
const about = {
  title: "It's me!",
  description:
    "Software Developer with 5 years of experience in building scalable web applications and backend systems. Proficient in JavaScript, Node.js, React.js, Java, Spring Boot, and RESTful API development, with expertise in relational databases. Experienced in optimizing database schemas, ensuring system performance, and conducting comprehensive testing.Adept at problem-solving, decision-making, and effective communication. Collaborative a team player focused on achieving project goals.",
  info: [
    {
      fieldName: <FaPhoneAlt />,
      fieldValue: "+1 (641) 233 2352",
    },

    {
      fieldName: <FaEnvelope />,
      fieldValue: "hninhnin.wai.career@gmail.com",
    },
  ],
};

//education data
const education = {
  icon: "/public/assets/photo.png",
  title: "My education",
  items: [
    {
      image: "/assets/school/miu.jpg",
      institution: "Maharishi International University",
      major: "Computer Science",
      degree: "Master Degree",
      duration: "(2023-2026 (Studying))",
      location: "Fairfield, Iowa, U.S",
      link: "https://www.miu.edu/",
    },
    {
      image: "/assets/school/ucsy.png",
      institution: "University of Computer Studies,Yangon",
      major: "Computer Science",
      degree: "Bachelor Degree",
      duration: "(2008-2012)",
      location: "Yangon, Myanmar",
      link: "https://www.ucsy.edu.mm/",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "I apply some technologies that are developed in my work and projects.",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaDatabase />,
      name: "Database",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            {<TabsTrigger value="about">About me</TabsTrigger>}
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* About Me */}
            <TabsContent value="about" className="w-full xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold animate-bounce w-50 h-50 ...">
                    {about.title}
                  </h3>
                </div>

                <p className="max-w-[600px] text-justify text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                {/* info */}
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 bg-[#27272c] text-accent rounded-md">
                          {item.fieldName}
                        </span>
                        <span className="text-md">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 xl:gap-[30px]">
                  {education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-#2323 h-auto py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-4"
                      >
                        <div className="flex flex-col sm:flex-row items-center text-center lg:text-left gap-4 sm:gap-2">
                          <img
                            src={item.image}
                            alt="school"
                            className="w-[60px] h-[60px] rounded-full"
                          />
                          <h3 className="text-xl max-w-[560px] min-h-[60px] hover:text-accent">
                            <a href={item.link} target="_">
                              {item.institution}{" "}
                            </a>
                          </h3>
                        </div>
                        <h4>
                          <span className="text-accent">{item.duration}</span>
                        </h4>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.degree}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.major}</p>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.location}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*  Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
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
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default AboutMe;
