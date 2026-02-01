import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { motion } from "framer-motion";
// Import relevant icons from react-icons
import { FaHtml5, FaJs, FaReact, FaAngular } from "react-icons/fa";
import { SiPython, SiR, SiAmazonwebservices, SiDocker, SiPostgresql, SiMongodb, SiGit, SiFastapi } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { getImageUrl } from "../../utils";

const iconMap = {
  HTML5: <FaHtml5 color="#E44D26" />,
  JavaScript: <FaJs color="#F7DF1E" />,
  React: <FaReact color="#61DAFB" />,
  Angular: <FaAngular color="#DD0031" />,
  Python: <SiPython color="#3776AB" />,
  R: <SiR color="#276DC3" />,
  AWS: <SiAmazonwebservices color="#FF9900" />,
  Docker: <SiDocker color="#2496ED" />,
  "SQL Server": <DiMsqlServer color="#CC2927" />,
  PostgreSQL: <SiPostgresql color="#4169E1" />,
  MongoDB: <SiMongodb color="#47A248" />,
  Git: <SiGit color="#F05032" />,
  FastAPI: <SiFastapi color="#009688" />,
  "C#": <TbBrandCSharp color="#68217A" />,
};

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <motion.h2
        className={styles.heading}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Technologies
      </motion.h2>
      <div className={styles.skillsRow}>
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className={styles.skillIconWrapper}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            {iconMap[skill.title] ? (
              React.cloneElement(iconMap[skill.title], { className: styles.skillIcon })
            ) : (
              <img
                src={getImageUrl(skill.imageSrc)}
                alt={skill.title}
                className={styles.skillIcon}
                title={skill.title}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}; 