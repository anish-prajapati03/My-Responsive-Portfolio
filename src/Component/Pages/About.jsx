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
                        Hello! I'm Anish, a passionate <strong>B.Tech student</strong> graduating in 2026, currently working as a Front-End Developer Intern at FilterWebs.
                        I love bringing ideas to life through code and creating seamless user experiences.
                    </p>
                    <p>
                        My journey in web development has equipped me with expertise in the <span className="highlight">MERN stack</span>, and I'm constantly exploring new technologies to build innovative solutions.
                        From real-time auction platforms to voice-based virtual assistants, I enjoy tackling challenging projects that push the boundaries of what's possible.
                    </p>
                    <p>
                        When I'm not coding, you'll find me learning about emerging tech trends, contributing to open-source projects, or brainstorming the next big idea.
                        I believe in continuous learning and growth, always striving to create applications that make a real difference.
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
                            <p>Front-End Developer Intern at FilterWebs</p>
                        </div>
                    </div>
                    <div className="about-card">
                        <FaHeart className="about-icon" />
                        <div>
                            <h3>Passion</h3>
                            <p>Creating innovative web solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
