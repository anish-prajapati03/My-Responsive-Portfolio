// src/components/Skills/Skills.jsx
import React from "react";
import "./Skill.css";

const SkillBar = ({ name, percent, color }) => (
    <div className="skill">
        <div className="skill-label">
            <span>{name}</span>
            <span>{percent}%</span>
        </div>
        <div className="skill-bar">
            <div className="skill-progress" style={{ width: `${percent}%`, backgroundColor: color }}></div>
        </div>
    </div>
);

const Skills = () => {
    const otherSkills = [
        "Socket.IO",
        "REST APIs",
        "Responsive Design",
        "Problem Solving",
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="skills-title">Skills & Technologies</h2>
            <p className="skills-subtitle">
                Here are the technologies and tools I work with to bring ideas to life
            </p>

            <div className="skills-container">
                <div className="skills-box">
                    <h3>Frontend</h3>
                    <SkillBar name="React" percent={90} color="#3b82f6" />
                    <SkillBar name="JavaScript" percent={85} color="#f59e0b" />
                    <SkillBar name="Tailwind CSS" percent={88} color="#06b6d4" />
                    <SkillBar name="HTML" percent={95} color="#f97316" />
                    <SkillBar name="CSS" percent={85} color="#a855f7" />
                </div>

                <div className="skills-box">
                    <h3>Backend</h3>
                    <SkillBar name="Python" percent={85} color="#facc15" />
                    <SkillBar name="Django" percent={80} color="#22c55e" />
                </div>

                <div className="skills-box">
                    <h3>GenAI / AI</h3>
                    <SkillBar name="Generative AI" percent={80} color="#8b5cf6" />
                    <SkillBar name="LLMs" percent={78} color="#ec4899" />
                    <SkillBar name="LangChain" percent={75} color="#14b8a6" />
                    <SkillBar name="RAG" percent={75} color="#f97316" />
                    <SkillBar name="AI Agents" percent={72} color="#6366f1" />
                    <SkillBar name="Prompt Engineering" percent={85} color="#eab308" />
                </div>

                <div className="skills-box">
                    <h3>Database & Tools</h3>
                    <SkillBar name="MongoDB" percent={80} color="#22c55e" />
                    <SkillBar name="MySQL" percent={75} color="#3b82f6" />
                    <SkillBar name="Git" percent={85} color="#ef4444" />
                    <SkillBar name="PostgreSQL" percent={70} color="#a855f7" />
                </div>
            </div>

            <div className="other-skills-section">
                <h3 className="other-skills-title">Also Working With</h3>
                <div className="other-skills-container">
                    {otherSkills.map((skill, idx) => (
                        <span key={idx} className="other-skill">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
