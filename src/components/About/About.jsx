import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const imageVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const textVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export const About = () => {
    return (
     <motion.section
      className={styles.container}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      id="about"
    >
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <motion.p
          className={styles.aboutText}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
        Master’s student in Data Science at Indiana University Bloomington, driven by a deep interest in how intelligent systems can transform decision-making. At riAI Capital, I’m designing agent-based analytical tools that reimagine financial planning with clarity, transparency, and genuine human understanding. Previously at Mindsprint, I engineered scalable software and data systems that improved global manufacturing performance, strengthening my commitment to precision, reliability, and purposeful design.

I’m passionate about turning complex data into meaningful insight and building intelligent systems that are not only powerful, but explainable, secure, and trustworthy and also one that earns confidence, enables better choices, and drives real-world impact.
        </motion.p>
      </div>image.png
    </motion.section>
    );
};