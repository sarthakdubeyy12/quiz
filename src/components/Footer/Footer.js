import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section about">
          <img src="/book2.jpg" alt="Dubey Construction Logo" className="footer-logo" />
          <h3>Brain Battle</h3>
          <p>
            Sharpen Your Mind, One Question at a Time.

          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        

        <div className="footer-section contact">
          <h4>Reach Us</h4>
          <p>Mobile Number: +91 8770210618</p>
          <p>E-mail: info@brainbattle.in</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sathak Dubey. All rights reserved.</p>
        <div className="footer-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
