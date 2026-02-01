import React from "react";
import styles from "./Education.module.css";
import { motion } from "framer-motion";

const educationData = [
  {
    logo: "/Indiana University Bloomington.png",
    logoAlt: "Indiana University",
    dates: "August 2024 - May 2026",
    degree: "Master of Science in Data Science",
    institution: "Indiana University - Bloomington, USA",
    coursework: [
      "Applied Machine Learning",
      "Statistics",
      "Advanced Database Technologies",
      "Security For Networked Systems",
      "Social Media Mining",
      "Database Design",
      "Usable AI",
    ],
    cgpa: "3.7/4",
  },
  {
    logo: "/Panimalar Eng College.png",
    logoAlt: "Panimalar Engineering College",
    dates: "August 2018 - May 2022",
    degree: "Bachelor of Engineering in Electronics and Instrumentation",
    institution: "Anna University - Chennai, India",
    coursework: [
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "Cloud Computing",
      "Intro to Python Programming",
      "Image Processing",
      "C Programming",
    ],
    cgpa: "8.6/10",
  },
];

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <motion.h2
        className={styles.title}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Education
      </motion.h2>
      <div className={styles.educationItems}>
        {educationData.map((item, idx) => (
          <motion.div
            key={idx}
            className={styles.educationItem}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className={styles.logoWrapper}>
              <motion.img
                className={styles.schoolLogo}
                src={item.logo}
                alt={item.logoAlt}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className={styles.educationItemText}>
              <p className={styles.dates}>{item.dates}</p>
              <h3 className={styles.degree}>{item.degree}</h3>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.courseworkBlock}>
                <span className={styles.courseworkLabel}>Coursework: </span>
                <span className={styles.courseworkList}>{item.coursework.join(", ")}</span>
              </p>
              <p className={styles.cgpaBlock}>
                <span className={styles.cgpaLabel}>CGPA: </span>
                <span className={styles.cgpaScore}>{item.cgpa}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
