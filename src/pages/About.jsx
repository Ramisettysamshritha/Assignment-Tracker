import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      <section className="about-hero">
        <span className="about-tag">
          About AssignHub
        </span>

        <h1>
          Smarter Assignment
          <br />
          Management Platform
        </h1>

        <p>
          AssignHub simplifies assignment management by bringing
          submissions, deadline tracking, grading, feedback,
          and collaboration into one centralized platform.
        </p>
      </section>

      <section className="about-text">
        <h2>What is AssignHub?</h2>

        <p>
          AssignHub is a modern web application designed to help
          educational institutions streamline the complete assignment
          lifecycle. From assignment submission to grading and feedback,
          everything is managed through a single intuitive platform.
        </p>
      </section>

      <section className="users-section">

        <div className="user-card">
          <h3>🎓 For Students</h3>

          <ul>
            <li>Submit assignments online</li>
            <li>Track deadlines and schedules</li>
            <li>View grades instantly</li>
            <li>Receive detailed feedback</li>
          </ul>
        </div>

        <div className="user-card">
          <h3>👨‍🏫 For Faculty</h3>

          <ul>
            <li>Review submissions efficiently</li>
            <li>Manage assignment deadlines</li>
            <li>Grade assignments easily</li>
            <li>Provide structured feedback</li>
          </ul>
        </div>

      </section>

      <section className="benefits">

        <div className="section-title">
          <h2>Why Choose AssignHub?</h2>
          <p>
            Everything needed to manage academic assignments efficiently.
          </p>
        </div>

        <div className="benefit-cards">

          <div className="benefit-card">
            <h3>⚡ Smart Submission</h3>
            <p>
              Submit assignments securely and effortlessly.
            </p>
          </div>

          <div className="benefit-card">
            <h3>📅 Deadline Tracking</h3>
            <p>
              Stay updated with schedules and deadlines.
            </p>
          </div>

          <div className="benefit-card">
            <h3>📝 Instant Feedback</h3>
            <p>
              Receive grades and comments quickly.
            </p>
          </div>

        </div>

      </section>

      <section className="tech-stack">
        <h2>Technology Stack</h2>

        <div className="tech-badges">
          <span>React</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>REST API</span>
        </div>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>

        <p>
          To modernize academic workflows through technology that
          improves efficiency, transparency, and collaboration
          between students and educators.
        </p>
      </section>

    </div>
  );
}

export default About;