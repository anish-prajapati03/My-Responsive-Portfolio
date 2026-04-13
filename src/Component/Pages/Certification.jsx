import React from 'react';
import './Certification.css';

const certifications = [
    {
        title: 'Complete Django Web Development Course – Basics to Advance',
        company: 'GeeksforGeeks',
        date: '2025',
        description:
            'Successfully completed a 12-week comprehensive Django Web Development course covering backend development from fundamentals to advanced concepts.',
        achievements: [
            'Completed 12-week intensive Django web development training',
            'Learned backend architecture, REST concepts, and database integration',
            'Built scalable web applications using Django framework',
        ],
        skills: ['Django', 'Python', 'Backend Development', 'Web Development', 'Database Integration'],
        certificateLink:
            'https://media.geeksforgeeks.org/courses/certificates/4c9cebad6bb1596cca53d42b5a8f96c6.pdf',
    },
    {
        title: 'Agentic AI: From Learner to Builder – Become an AI Agent Architect',
        company: 'IBM SkillsBuild (in collaboration with CSRBOX)',
        date: 'July 2025 – August 2025',
        description:
            'Completed a 4-week IBM SkillsBuild Project-Based Learning program focused on designing and building AI agents using modern AI concepts and practical implementation.',
        achievements: [
            'Completed project-based learning on Agentic AI systems',
            'Learned AI agent architecture and intelligent workflow design',
            'Gained hands-on experience building AI-driven solutions',
        ],
        skills: ['Agentic AI', 'AI Agents', 'Artificial Intelligence', 'Problem Solving', 'AI System Design'],
        certificateLink:
            'https://www.linkedin.com/posts/anishprajapati03_ai-agenticai-ibmskillsbuild-share-7366892358828740612-NHK9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFOvJUB77rBfvRocxNCYsv5JApkgqEIKrI',
    },
];


const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section">

            <h2 className="section-title">
                Certifications <span>& Training</span>
            </h2>
            <p className="section-subtitle">
                Professional certifications and industry simulations that showcase my commitment to continuous learning
            </p>

            <div className="certification-cards">
                {certifications.map((cert, index) => (
                    <div className="cert-card" key={index}>
                        <div className="cert-header">
                            <div className="cert-icon">{index === 0 ? '🎓' : '🏅'}</div>
                            <div>
                                <h3>{cert.title}</h3>
                                <p className="cert-company">{cert.company}</p>
                                <p className="cert-date">📅 {cert.date}</p>
                            </div>
                        </div>
                        <p className="cert-desc">{cert.description}</p>

                        <div className="cert-achievements">
                            <h4>✅ Key Achievements</h4>
                            <ul>
                                {cert.achievements.map((item, i) => (
                                    <li key={i}>🔹 {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="cert-skills">
                            <h4>Skills Gained</h4>
                            <div className="skills-tags">
                                {cert.skills.map((skill, i) => (
                                    <span key={i} className="tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            className="cert-link"
                            href={cert.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🔗 View Certificate
                        </a>
                    </div>
                ))}
            </div>

            <div className="learning-note">
                <h3>Continuous Learning</h3>
                <p>
                    I continuously enhance my expertise through certifications from GeeksforGeeks and IBM SkillsBuild,
                    gaining hands-on knowledge in Django development, Generative AI, ChatGPT, and intelligent system design
                    to build scalable real-world web and AI-driven applications.
                </p>
            </div>
        </section>
    );
};

export default Certifications;
