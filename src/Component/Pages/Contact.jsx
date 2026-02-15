import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock,
    FaPaperPlane
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {

    const form = useRef();

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(""); // success | error

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        emailjs
            .sendForm(
                "service_dpdsi6d",   // ✅ replace
                "template_74valpl",  // ✅ replace
                form.current,
                "dE28QlhB35DGQTr4e"    // ✅ replace
            )
            .then(() => {
                setLoading(false);
                setStatus("success");
                form.current.reset();
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                setStatus("error");
            });
    };

    return (
        <section id="contact" className="contact-section">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
            </p>

            <div className="contact-content">

                {/* LEFT SIDE */}
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <p>
                        I'm always interested in new opportunities and exciting projects.
                        Whether you want to collaborate or just say hello, feel free to reach out!
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

                {/* RIGHT SIDE FORM */}
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <h3>Send Me a Message</h3>

                    <label>Name</label>
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your full name"
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        placeholder="your.email@example.com"
                        required
                    />

                    <label>Message</label>
                    <textarea
                        name="message"
                        placeholder="Tell me about your project or just say hello..."
                        required
                    ></textarea>

                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : (
                            <>
                                <FaPaperPlane /> Send Message
                            </>
                        )}
                    </button>

                    {/* STATUS MESSAGE */}
                    {status === "success" && (
                        <p className="success-msg">
                            ✅ Message sent successfully!
                        </p>
                    )}

                    {status === "error" && (
                        <p className="error-msg">
                            ❌ Failed to send message. Please try again.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;
