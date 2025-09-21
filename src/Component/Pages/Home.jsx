// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import { FaMagic } from "react-icons/fa"; // ✅ Available
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Home = () => {
    return (
        <section className="home" id="home">
            <p className="intro"><FaMagic /> Hello, I'm</p>
            <h1>Anish Prajapati</h1>
            <h2>Front-End Developer<span>(React)</span></h2>
            <p className="description">
                B.Tech student passionate about creating beautiful, responsive web applications.<br />
                Currently interning at FilterWebs and building innovative projects with the MERN stack.
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
