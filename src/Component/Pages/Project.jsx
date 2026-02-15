import React from 'react';
import './Project.css';

const projects = [
    {
        title: 'NaN_Bidder',
        description: 'A comprehensive auction platform featuring real-time bidding, user authentication, role-based access control, and live notifications. Built with modern web technologies for seamless user experience.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO'],
        icon: '⚡',
        codeLink: 'https://github.com/anish-prajapati03/Real-time-Auction-Platform.git',
        liveLink: 'https://nanbidders.netlify.app/',
        liveColor: 'orange'
    },
    {
        title: 'Astra',
        description: 'An intelligent voice assistant capable of processing natural language commands and providing real-time responses through API integrations. Features advanced voice recognition and NLP capabilities.',
        techStack: ['React', 'NLP APIs', 'Voice Recognition'],
        icon: '🎤',
        codeLink: 'https://github.com/anish-prajapati03/Astra_virtual_assistant.git',
        liveLink: 'https://astraxni.netlify.app/',
        liveColor: 'pink'
    },
    {
        title: 'Weather App',
        description: 'A modern weather forecasting application that provides real-time weather data, 5-day forecasts, and location-based weather updates. Features beautiful UI with dynamic backgrounds based on weather conditions.',
        techStack: ['React', 'Weather API', 'Geolocation', 'CSS'],
        icon: '☁️',
        codeLink: 'https://github.com/anish-prajapati03/WeatherApp.git',
        liveLink: 'https://weatherwebxni.netlify.app/',
        liveColor: 'skyblue'
    },

];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <h2 className="section-title">
                Featured <span>Projects</span>
            </h2>
            <p className="section-subtitle">
                Here are some of the projects I've worked on, showcasing my skills in full-stack development
            </p>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-icon">{project.icon}</div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>

                        <p className="tech-label">Tech Stack</p>
                        <div className="tech-tags">
                            {project.techStack.map((tech, idx) => (
                                <span className="tag" key={idx}>{tech}</span>
                            ))}
                        </div>

                        <div className="project-links">
                            <a className="btn code" href={project.codeLink} target="_blank" rel="noreferrer">
                                🧠 Code
                            </a>
                            <a
                                className="btn live"
                                href={project.liveLink}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                    background: `linear-gradient(90deg, ${project.liveColor}, ${project.liveColor})`
                                }}
                            >
                                🚀 Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
