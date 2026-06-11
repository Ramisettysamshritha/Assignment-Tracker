import "../styles/Home.css";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">
            Modern Academic Management Platform
          </span>

          <h1>
  Manage Assignments
Smarter and Faster
</h1>

          <p>
            Streamline assignment submissions, deadline tracking,
            grading, peer review, and feedback through one centralized
            academic platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h2>1000+</h2>
          <p>Assignments Submitted</p>
        </div>

        <div className="stat-card">
          <h2>500+</h2>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h2>100+</h2>
          <p>Faculty Members</p>
        </div>
      </section>

      <section className="features">
        <div className="section-header">
          <h2>Why Choose AssignHub?</h2>

          <p>
            Everything needed to manage assignments efficiently.
          </p>
        </div>

        <div className="feature-cards">
          <div className="card">
            <h3>⚡ Fast Submission</h3>
            <p>
              Submit assignments securely within seconds.
            </p>
          </div>

          <div className="card">
            <h3>📅 Smart Tracking</h3>
            <p>
              Stay updated with deadlines and submission history.
            </p>
          </div>

          <div className="card">
            <h3>📝 Instant Feedback</h3>
            <p>
              Receive grades and faculty feedback quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="workflow">
        <div className="section-header">
          <h2>How It Works</h2>
        </div>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Upload</h3>
            <p>Students submit assignments online.</p>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Review</h3>
            <p>Faculty evaluates submissions.</p>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Feedback</h3>
            <p>Students receive grades and comments.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Simplify Assignment Management?</h2>

        <p>
          Join the next generation of academic workflow systems.
        </p>

        <button className="primary-btn">
          Start Today
        </button>
      </section>
    </>
  );
}

export default Home;