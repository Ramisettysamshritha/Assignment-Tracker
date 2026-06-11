import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>AssignHub</h2>

          <p>
            A modern assignment management platform designed to
            simplify submissions, grading, deadline tracking,
            and academic collaboration.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>

          <ul>
            <li>Assignment Submission</li>
            <li>Deadline Tracking</li>
            <li>Grading System</li>
            <li>Feedback Portal</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📧 support@assignhub.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Hyderabad, Telangana, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 AssignHub. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;