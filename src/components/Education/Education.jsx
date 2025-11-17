import React from 'react';
import styles from './Education.module.css';
import { motion } from 'framer-motion';

const glideInVariantBottom = {
  hidden: { opacity: 0, y: 100 }, // Start from 100px below and fully transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } // Glide up to original position and fully opaque
};

const glideInVariantTop = {
  hidden: { opacity: 0, y: -50 }, // Start from 50px above and fully transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } // Glide down to original position and fully opaque
};

export const Education = () => {
  const masterCoursework = [
    "Applied Machine Learning",
    "Statistics",
    "Advanced Database Technologies",
    "Security For Networed Systems",
    "Social Media Mining",
    "Database Design",
    "Usable AI"
  ];

  const bachelorCoursework = [
    "Object Oriented Programming",
    "Data Structures & Algorithms",
    "Cloud Computing",
    "Intro to Python Programming",
    "Image Processing",
    "C Programming"
  ];

  return (
    <section 
      className={styles.container}
      id="education"
    >
      <motion.h2 
        className={styles.title}
        variants={glideInVariantTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Education
      </motion.h2>
      <div className={styles.educationItems}>
        <motion.div 
          className={styles.educationItem}
          variants={glideInVariantBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img className={styles.bannerImg} src={'/Indiana University Bloomington.png'} alt="Indiana University Bloomington" />
          
          <div className={styles.educationItemText}>
            <h3>Master of Science in Data Science</h3>
            <p>Indiana University - Bloomington, USA</p> 
            <p className={styles.dates}>August 2024 - May 2026</p>
            <p>
              <span className={styles.courseworkHeading}>Coursework: </span>{masterCoursework.join(', ')}
              </p>
            <p>CGPA: 3.6/4</p>
          </div>
        </motion.div>
        <motion.div 
          className={styles.educationItem}
          variants={glideInVariantBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img className={styles.bannerImg} src={'/Panimalar Eng College.png'} alt="Panimalar Engineering College" />
          <div className={styles.educationItemText}>
            <h3>Bachelor of Engineering in Electronics and Instrumentation</h3>
            <p>Anna University - Chennai, India</p>
            <p className={styles.dates}>August 2018 - May 2022</p>
             <p>
              <span className={styles.courseworkHeading}>Coursework: </span> {bachelorCoursework.join(', ')}
            </p>
            <p>CGPA: 8.6/10</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 