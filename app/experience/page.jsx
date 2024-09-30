"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const experiences = [
  {
    num: "01",
    title: "Web Development",
    description:
      "HMIS developed with team. By using react.js, node.js and Oracle.",
    link: "https://cpintl.org/myanmar",
    image: "/assets/work/cpi.png",
    company: "Community Partners International",
    position: "Software Developer",
    duration: "2018-2023",

    responsibility1:
      "Developed Health Management Information System using Node.js, React.js, and Oracle, improving healthcare standards in remote areas.",
    responsibility2:
      "Implemented RESTful APIs with Express.js, boosting front-end performance by 30% through seamless data integration.",
    responsibility3:
      "Created responsive UI with Material UI and React.js, enhancing user experience and increasing client satisfaction.",
    responsibility4:
      "Designed scalable Oracle database schemas and optimized queries to manage large health data volumes.",
    responsibility5:
      "Performed end-to-end testing, ensuring application stability and resolving critical issues early",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "HMIS developed with team. By using react.js, node.js and Oracle.",
    link: "https://www.mit.com.mm/",
    image: "/assets/work/mit.png",
    company: "Myanmar Information Technology pte.ltd",
    position: "Software Developer",
    duration: "2015-2016",

    responsibility1:
      "Implemented Health Information Management System using VB (Windows) and Java (Web), improving development efficiency and reusability.",
    responsibility2:
      "Developed user-friendly interfaces with AngularJS and Java, boosting client satisfaction and drafting end-user documentation.",
    responsibility3:
      "Applied MVC patterns, increasing maintenance efficiency by 20% during change requests and version management.",
    responsibility4:
      "Enhanced team productivity by 30% through functional module development and reduced manual efforts by 50% with MSSQL-driven reporting.",
    responsibility5:
      "Conducted thorough testing on data entry forms, significantly reducing errors at launch.",
  },
];

const Experience = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="flex-1 flex flex-col justify-center gap-6 group"
        >
          {experiences.map((experience, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex jusitfy-between items-center">
                  <div>
                    <Link
                      href={experience.link}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex
                      justify-center items-center hover:-rotate-45"
                      target="_"
                    >
                      <img
                        src={experience.image}
                        className="w-[60px] h-[60px] rounded-full"
                      />
                    </Link>
                  </div>

                  <div style={{ marginLeft: "10px" }}>
                    <h3 className="text-[30px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                      {experience.company}
                    </h3>
                  </div>
                </div>
                <div
                  className="text-xl font-extrabold text-outline
                   transition-all duration-500"
                >
                  {experience.position}{" "}
                  <span>
                    {"("}
                    {experience.duration}
                    {")"}
                  </span>
                </div>
                {/* description */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60 text-justify">
                      {experience.responsibility1}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60 text-justify">
                      {experience.responsibility2}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60 text-justify">
                      {experience.responsibility3}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60 text-justify">
                      {experience.responsibility4}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                    <p className="text-white/60 text-justify">
                      {experience.responsibility5}
                    </p>
                  </div>
                </div>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
