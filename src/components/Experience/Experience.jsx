import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <motion.h2
        className={styles.title}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Experience
      </motion.h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.experienceRow}>
              {/* Left column: date + company logo */}
              <motion.div
                className={styles.experienceLeft}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
              >
                <span className={styles.dateCol}>
                  {historyItem.startDate} – {historyItem.endDate}
                </span>
                <div
                  className={`${styles.logoWrapper} ${
                    historyItem.organisation === "riAI Capital Ltd" ? styles.logoZoomOut : ""
                  } ${
                    historyItem.organisation === "Mindsprint" ? styles.logoContain : ""
                  }`}
                >
                  <img
                    src={historyItem.imageSrc?.startsWith("/") ? historyItem.imageSrc : `/assets/${historyItem.imageSrc}`}
                    alt={historyItem.organisation}
                    className={styles.companyLogo}
                  />
                </div>
              </motion.div>
              {/* Right column: title, company, bullets, tags */}
              <motion.div
                className={styles.experienceRight}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
              >
                <h3 className={styles.roleTitle}>
                  <strong>{historyItem.role}</strong> – {historyItem.organisation}
                </h3>
                {historyItem.projects ? (
                  <div className={styles.projects}>
                    {historyItem.projects.map((project, pIdx) => (
                      <div key={pIdx} className={styles.projectBlock}>
                        <h4 className={styles.projectName}>{project.name}</h4>
                        <ul className={styles.bullets}>
                          {project.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                        {project.tools && project.tools.length > 0 && (
                          <div className={styles.toolsRow}>
                            {project.tools.map((tool, i) => (
                              <span key={i} className={styles.tool}>
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : historyItem.bullets && historyItem.bullets.length > 0 ? (
                  <ul className={styles.bullets}>
                    {historyItem.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : (
                  <p className={styles.description}>{historyItem.description}</p>
                )}
                {!historyItem.projects && historyItem.tools && historyItem.tools.length > 0 && (
                  <div className={styles.toolsRow}>
                    {historyItem.tools.map((tool, i) => (
                      <span key={i} className={styles.tool}>
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
