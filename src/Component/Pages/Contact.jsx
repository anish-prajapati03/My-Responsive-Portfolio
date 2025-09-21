import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>

            <div className="contact-content">
                {/* Left Column - Contact Info */}
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>
                        I'm always interested in new opportunities and exciting projects.
                        Whether you have a question, want to collaborate, or just want to say hi,
                        feel free to reach out!
                    </p>

                    <div className="contact-box">
                        <FaEnvelope />
                        <div>
                            <strong>Email</strong>
                            <p>anish.prajapati7752@gmail.com</p>
                            <small>Drop me a line anytime!</small>
                        </div>
                    </div>

                    <div className="contact-box">
                        <FaMapMarkerAlt />
                        <div>
                            <strong>Location</strong>
                            <p>Gorakhpur, India</p>
                            <small>Available for remote work</small>
                        </div>
                    </div>

                    <div className="contact-box">
                        <FaClock />
                        <div>
                            <strong>Availability</strong>
                            <p>Open for opportunities</p>
                            <small>Freelance & collaboration</small>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <form className="contact-form">
                    <h3>Send Me a Message</h3>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your full name" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="your.email@example.com" required />

                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Tell me about your project or just say hello..." required></textarea>

                    <button type="submit">
                        <FaPaperPlane /> Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
