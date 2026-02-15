// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import { FaMagic } from "react-icons/fa"; // ✅ Available
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Home = () => {
    return (
        <section className="home" id="home">
            <p className="intro"><FaMagic /> Hello, I'm</p>
            <h1>Anish Prajapti</h1>
            <h2>Software Developer<span> (React+Django)</span></h2>
            <p className="description">
                B.Tech student passionate about creating beautiful, responsive web applications.<br />
                Frontend Developer Intern at FilterWebs, focused on building dynamic and responsive user interfaces.
                Trained in AI/ML and Django at Softpro India, gaining practical experience in machine learning and backend application development.
            </p>

            <div className="home-buttons">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>

            <div className="home-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>

            <div className="scroll-down">&#8595;</div>
        </section>
    );
};

export default Home;
