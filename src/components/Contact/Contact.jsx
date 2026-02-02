import { useState } from "react";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/xpzvnqkz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section className={styles.container} id="contact">
      <div className={styles.content}>
        <motion.h2
          className={styles.title}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <p className={styles.description}>
          <em>Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</em>
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
          <button type="submit" className={styles.sendBtn}>
            Send Message
          </button>
          {status && <p className={styles.status}>{status}</p>}
        </form>

        <div className={styles.directContactSection}>
          <h3 className={styles.directTitle}>Reach out directly!</h3>
          <div className={styles.directInfo}>
            <div className={styles.directRow}>
              <MdPhone className={styles.directIcon} />
              <div className={styles.textContainer}>
                <span>Phone: 317-533-4461</span>
              </div>
            </div>
            <div className={styles.directRow}>
              <MdLocationOn className={styles.directIcon} />
              <div className={styles.textContainer}>
                <span>Address: Indianapolis, IN - open to relocation</span>
              </div>
            </div>
            <div className={styles.directRow}>
              <MdEmail className={styles.directIcon} />
              <div className={styles.textContainer}>
                <a href="mailto:jaschri@iu.edu">jaschri@iu.edu</a> | <a href="mailto:0802jas@gmail.com">0802jas@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.socialRow}>
          <a
            href="https://www.linkedin.com/in/jasmine-christopher-7b0b2b1b3/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://github.com/jasmine6789"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconLink}
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="/JasmineChristopher.pdf"
            download
            className={styles.socialIconLink}
            title="Download Resume"
          >
            <FaFileDownload className={styles.icon} />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Contact };