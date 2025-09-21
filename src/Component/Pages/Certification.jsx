import React from 'react';
import './Certification.css';

const certifications = [
    {
        title: 'Deloitte Australia Data Analytics Job Simulation',
        company: 'Deloitte - via Forage',
        date: 'June 2025',
        description:
            'Completed a comprehensive Deloitte job simulation involving data analysis and forensic technology',
        achievements: [
            'Completed a Deloitte job simulation involving data analysis and forensic technology',
            'Created a data dashboard using Tableau',
            'Used Excel to classify data and draw business conclusions',
        ],
        skills: ['Tableau', 'Excel', 'Data Analysis', 'Forensic Technology', 'Dashboard Creation'],
        certificateLink:
            'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Qk9X2P39ES96gxwKz_1751208246088_completion_certificate.pdf',
    },
    {
        title: 'Tata Group Data Analytics Job Simulation',
        company: 'Tata Group - via Forage',
        date: 'June 2025',
        description:
            'Completed EDA using GenAI to evaluate data quality and risks with advanced AI methodologies',
        achievements: [
            'Completed EDA using GenAI to evaluate data quality and risks',
            'Proposed a no-code predictive model framework for customer delinquency risk',
            'Designed an AI-powered collection strategy emphasizing ethical AI and automation',
        ],
        skills: ['GenAI', 'EDA', 'Predictive Modeling', 'Ethical AI', 'Data Quality Assessment'],
        certificateLink:
            'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_Qk9X2P39ES96gxwKz_1751274297733_completion_certificate.pdf', // Replace with actual Tata certificate URL
    },
];

const Certifications = () => {
    return (
        <section className="certifications-section">
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
                    These industry simulations from leading companies like Deloitte and Tata Group have enhanced my data
                    analytics skills and provided hands-on experience with real-world business challenges. I'm committed to
                    staying current with emerging technologies and industry best practices.
                </p>
            </div>
        </section>
    );
};

export default Certifications;
