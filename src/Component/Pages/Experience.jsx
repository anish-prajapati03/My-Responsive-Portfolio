import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaCode } from "react-icons/fa";
import './Experience.css'


const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
                My journey in professional web development and the impact I've made
            </p>

            <div className="experience-card">
                <div className="experience-header">
                    <div className="company-icon">
                        <i className="fa-solid fa-building" />
                    </div>
                    <div className="role-info">
                        <h3>Front-End Developer Intern</h3>
                        <p className="company">FilterWebs</p>
                    </div>
                    <div className="experience-meta">
                        <p>
                            <FaCalendarAlt /> Sep 2024 – Feb 2025
                        </p>
                        <p>
                            <FaMapMarkerAlt /> Gorakhpur
                        </p>
                    </div>
                </div>

                <div className="experience-body">
                    <p>
                        Working as a Front-End Developer Intern, focusing on React
                        development and creating responsive web applications.
                    </p>

                    <h4>
                        <FaCode /> Key Contributions & Achievements
                    </h4>
                    <ul className="achievements">
                        <li>Developed responsive web apps using React and JavaScript.</li>
                        <li>
                            Collaborated with teams to deliver high-quality UI/UX designs.
                        </li>
                        <li>
                            Followed best practices for code organization and architecture.
                        </li>
                        <li>Worked with REST APIs for frontend-backend integration.</li>
                        <li>
                            Contributed to user experience through intuitive design.
                        </li>
                    </ul>

                    <h4>Technologies & Tools</h4>
                    <div className="tech-stack">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Tailwind CSS</span>
                        <span>Git</span>
                        <span>REST APIs</span>
                    </div>
                </div>
            </div>

            <div className="whats-next">
                <h3>What's Next?</h3>
                <p>
                    Currently seeking opportunities to contribute to innovative projects
                    and continue growing as a full-stack developer. I'm particularly
                    interested in roles where I can work on cutting-edge technologies and
                    make a meaningful impact.
                </p>
            </div>
        </section>
    );
};

export default Experience;
