// src/components/About/About.jsx
import React from "react";
import "./About.css";
import { FaGraduationCap, FaCode, FaHeart } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="about">
            <h2 className="about-title">About Me</h2>
            <div className="about-container">
                <div className="about-text">
                    <p>
                        Hello! I'm Anish, a passionate <strong>B.Tech student</strong> graduating in 2026, currently working as a
                        <strong> Frontend Developer Intern at FilterWebs</strong>. I enjoy building interactive and responsive user
                        interfaces that provide smooth and engaging user experiences.
                    </p>

                    <p>
                        I specialize in <span className="highlight">React.js</span> for frontend development and
                        <span className="highlight"> Django</span> for backend development, creating scalable and efficient web applications.
                        I have also completed <strong>AI/ML and Django training from Softpro India</strong>, where I gained practical
                        experience in machine learning concepts, backend architecture, and intelligent application development.
                    </p>

                    <p>
                        I am passionate about combining modern web technologies with AI-driven solutions to build impactful applications.
                        When I'm not coding, I explore new technologies, strengthen my problem-solving skills, and work on innovative
                        projects that enhance real-world user experiences.
                    </p>
                </div>


                <div className="about-cards">
                    <div className="about-card">
                        <FaGraduationCap className="about-icon" />
                        <div>
                            <h3>Education</h3>
                            <p>B.Tech Student (Graduating 2026)</p>
                        </div>
                    </div>
                    <div className="about-card">
                        <FaCode className="about-icon" />
                        <div>
                            <h3>Experience</h3>
                            <p>Frontend Developer Intern at FilterWebs | AI/ML & Django Training – Softpro India</p>

                        </div>
                    </div>
                    <div className="about-card">
                        <FaHeart className="about-icon" />
                        <div>
                            <h3>Passion</h3>
                            <p>Building smart web applications with React, Django, and AI-driven solutions</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
