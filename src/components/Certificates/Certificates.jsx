import React from 'react';
import styles from './Certificates.module.css';
import { motion } from 'framer-motion';

export const Certificates = () => {
  const certs = [
    {
      title: 'AWS Certified Machine Learning Engineer - Associate',
      image: '/aws-certified-machine-learning-engineer-associate (1).png',
      link: 'https://www.credly.com/badges/a19caa80-c836-4df4-b745-98ecc01ab01e/linked_in_profile'
    },
    {
      title: 'AWS Certified Solutions Architect - Associate',
      image: '/aws-certified-solutions-architect-associate (1).png',
      link: 'https://www.credly.com/badges/15b1d230-28af-4a8b-87d5-adb0b56a604a/linked_in_profile'
    },
    {
      title: 'Microsoft Certified: Azure AI Engineer Associate',
      image: '/Azure AI Engineer Associate.png',
      link: 'https://www.credly.com/badges/your-azure-link'
    }
  ];

  return (
    <section className={styles.container} id="certificates">
      <motion.h2
        className={styles.title}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Certifications
      </motion.h2>
      <div className={styles.grid}>
        {certs.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className={styles.badge}
              loading="lazy"
            />
            <p className={styles.certTitle}>{cert.title}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};


