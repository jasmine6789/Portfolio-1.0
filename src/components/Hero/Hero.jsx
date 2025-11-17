import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const typewriterPhrases = [
  "AI & ML Engineer",
  "Data Scientist",
  "Cloud-Native Problem Solver"
];

export const Hero = () => {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIdx];
    let timeout;
    if (!deleting && charIdx < currentPhrase.length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), 90);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), 40);
    } else if (!deleting && charIdx === currentPhrase.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((phraseIdx + 1) % typewriterPhrases.length);
      }, 400);
    }
    setDisplayed(currentPhrase.substring(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx]);

  return (
    <motion.section
      className={styles.container}
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Hi, I'm Jasmine</span>
          <span className={styles.lastName}>Christopher</span>
        </h1>
        <div className={styles.typewriterLine}>
          <span>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <p className={styles.aboutText}>
          Master's student in Data Science at Indiana University Bloomington, driven by a deep interest in how intelligent systems can transform decision-making. At riAI Capital, I'm designing agent-based analytical tools that reimagine financial planning with clarity, transparency, and genuine human understanding. Previously at Mindsprint, I engineered scalable software and data systems that improved global manufacturing performance, strengthening my commitment to precision, reliability, and purposeful design. I'm passionate about turning complex data into meaningful insight and building intelligent systems that are not only powerful, but explainable, secure, and trustworthy and also one that earns confidence, enables better choices, and drives real-world impact.
        </p>
        <div className={styles.contactLinks}>
          <a href="#contact" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="/JasmineChristopher.pdf" download className={styles.resumeBtn}>
            Resume
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/JasmineChristopher_Headshot.png" alt="Jasmine Christopher" className={styles.heroImg}/>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll Down</span>
        <FiChevronDown className={styles.scrollArrow} />
      </div>
    </motion.section>
  );
};