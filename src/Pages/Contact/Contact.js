import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title"><FaPaperPlane /> Contact Us</h1>
        <p className="contact-subtitle">
          Have questions, feedback, or just want to say hello? We'd love to hear from you.
        </p>

        <div className="contact-info">
          <div className="info-block">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>support@brainbattle.com</p>
          </div>
          <div className="info-block">
            <FaPhone className="contact-icon" />
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div className="info-block">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>Delhi, India</p>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="6" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        
      </div>
    </div>
  );
};

export default Contact;
