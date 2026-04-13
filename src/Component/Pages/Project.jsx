import React from 'react';
import './Project.css';

const projects = [
    {
        title: 'NaN_Bidder',
        description: 'A comprehensive auction platform featuring real-time bidding, user authentication, role-based access control, and live notifications. Built with modern web technologies for seamless user experience.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.IO'],
        icon: '💸',
        codeLink: 'https://github.com/anish-prajapati03/Real-time-Auction-Platform.git',
        liveLink: 'https://nanbidders.netlify.app/',
        liveColor: 'orange'
    },
    {
        title: 'AnixCartx',
        description: 'Developed a full-stack e-commerce platform using React.js, Django, and Django REST Framework, featuring product browsing, cart management, JWT-based authentication, and secure checkout with responsive UI and seamless REST API integration.',
        techStack: ['React.js', 'Django', 'Django REST Framework', 'JWT Authentication', 'REST APIs'],
        icon: '🛒',
        codeLink: 'https://github.com/anish-prajapati03/anixcart-backend.git',
        liveLink: 'https://anixcartx.netlify.app/',
        liveColor: 'blue'
    },
    {
        title: 'Weather App',
        description: 'A banking management system built using Python and OOP principles that enables users to create accounts, perform deposits/withdrawals, manage transactions, and handle account updates with secure data management.',
        techStack: ['Python', 'Streamlit', 'OOP', 'JSON/File Handling', 'Exception Handling'],
        icon: '🏦',
        codeLink: 'https://github.com/anish-prajapati03/Bank-Management-System-OOP-in-Python-.git',
        liveLink: 'https://anixbank.streamlit.app/',
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
