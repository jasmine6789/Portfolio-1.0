import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.h2
        className={styles.title}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        About Me
      </motion.h2>
      <div className={styles.content}>
        <motion.p
          className={styles.aboutText}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
        Master’s student in Data Science at Indiana University Bloomington, driven by a deep interest in how intelligent systems can transform decision-making. At riAI Capital, I’m designing agent-based analytical tools that reimagine financial planning with clarity, transparency, and genuine human understanding. Previously at Mindsprint, I engineered scalable software and data systems that improved global manufacturing performance, strengthening my commitment to precision, reliability, and purposeful design.

I’m passionate about turning complex data into meaningful insight and building intelligent systems that are not only powerful, but explainable, secure, and trustworthy and also one that earns confidence, enables better choices, and drives real-world impact.
        </motion.p>
      </div>
    </section>
  );
};