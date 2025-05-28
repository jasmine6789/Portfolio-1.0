import React, {useState} from "react";
import styles from './Navbar.module.css';
import { FiDownload, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useTheme } from '../../context/ThemeContext';

console.log("Navbar rendered");

export const Navbar = ({ activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <nav className={styles.navbar}>
            <div className={styles.leftGroup}>
                <button 
                    onClick={toggleTheme} 
                    className={styles.themeToggle}
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDarkMode 
                        ? <FiSun className={styles.icon} style={{ color: '#FFD600' }} /> 
                        : <FiMoon className={styles.icon} style={{ color: '#222B45' }} />}
                </button>
                <a href="/resume.pdf" download title="Download Resume">
                    <FiDownload className={styles.icon} />
                </a>
                <a href="https://linkedin.com/in/jasmine-christopher" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin className={styles.icon} />
                </a>
                <a href="https://github.com/jasmine6789" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/j.a.s.m.i.n.e_c/" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <FaInstagram className={styles.icon} />
                </a>
            </div>

            <div className={styles.iconRow}>
                <span className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX className={styles.icon} /> : <FiMenu className={styles.icon} />}
                </span>
                <ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                >
                    <li>
                        <a href="#about" className={activeSection === 'about' ? styles.active : ''}>About</a>
                    </li>
                    <li>
                        <a href="#education" className={activeSection === 'education' ? styles.active : ''}>Education</a>
                    </li>
                    <li>
                        <a href="#skills" className={activeSection === 'skills' ? styles.active : ''}>Skills</a>
                    </li>
                    <li>
                        <a href="#experience" className={activeSection === 'experience' ? styles.active : ''}>Experience</a>
                    </li>
                    <li>
                        <a href="#projects" className={activeSection === 'projects' ? styles.active : ''}>Projects</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
