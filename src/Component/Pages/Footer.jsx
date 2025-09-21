import React from "react";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div>
                    <h2 className="footer-title">
                        <span className="highlight">Anish</span> Prajapati
                    </h2>
                    <p className="footer-subtitle">
                        Front-End Developer passionate about creating amazing web experiences
                    </p>
                </div>

                <div className="footer-icons">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>

                <div className="back-to-top">
                    <button onClick={scrollToTop}>
                        <FaArrowUp /> Back to Top
                    </button>
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <p>© 2025 Anish Prajapati. All rights reserved.</p>
                <p>
                    Made with <span className="heart">❤️</span> using React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
