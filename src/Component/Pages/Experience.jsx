import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaCode } from "react-icons/fa";
import './Experience.css'


const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">
                My journey in professional development, AI learning, and real-world project experience
            </p>


            {/* FILTERWEBS EXPERIENCE */}
            <div className="experience-card">
                <div className="experience-header">
                    <div className="company-icon">
                        <i className="fa-solid fa-building" />
                    </div>
                    <div className="role-info">
                        <h3>Frontend Developer Intern</h3>
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
                        Worked as a Frontend Developer Intern, focusing on building responsive
                        and interactive web applications using React and modern web technologies.
                    </p>

                    <h4>
                        <FaCode /> Key Contributions & Achievements
                    </h4>
                    <ul className="achievements">
                        <li>Developed responsive UI components using React and JavaScript.</li>
                        <li>Integrated frontend with backend services using REST APIs.</li>
                        <li>Collaborated with team members to deliver user-friendly interfaces.</li>
                        <li>Improved application performance and UI responsiveness.</li>
                        <li>Followed clean coding practices and modular architecture.</li>
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

            {/* SOFTPRO INDIA TRAINING */}
            <div className="experience-card">
                <div className="experience-header">
                    <div className="company-icon">
                        <i className="fa-solid fa-graduation-cap" />
                    </div>
                    <div className="role-info">
                        <h3>AI/ML & Django Trainee</h3>
                        <p className="company">Softpro India</p>
                    </div>
                    <div className="experience-meta">
                        <p>
                            <FaCalendarAlt /> 2025
                        </p>
                        <p>
                            <FaMapMarkerAlt /> Lucknow
                        </p>
                    </div>
                </div>

                <div className="experience-body">
                    <p>
                        Completed professional training in Artificial Intelligence, Machine Learning,
                        and Django backend development with hands-on project-based learning.
                    </p>

                    <h4>
                        <FaCode /> Key Learning & Achievements
                    </h4>
                    <ul className="achievements">
                        <li>Learned Django framework for backend web development.</li>
                        <li>Implemented machine learning concepts in real-world scenarios.</li>
                        <li>Worked on AI-based application development and problem solving.</li>
                        <li>Understood database integration and backend architecture.</li>
                        <li>Built intelligent applications combining AI and web technologies.</li>
                    </ul>

                    <h4>Technologies & Tools</h4>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Django</span>
                        <span>Machine Learning</span>
                        <span>AI Concepts</span>
                        <span>PostgreSQL</span>
                        <span>REST APIs</span>
                    </div>
                </div>
            </div>


            <div className="whats-next">
                <h3>What's Next?</h3>
                <p>
                    Currently seeking opportunities to contribute to innovative projects
                    where I can apply my React frontend expertise along with Django and AI
                    development skills to build impactful real-world applications.
                </p>
            </div>
        </section>

    );
};

export default Experience;
