import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <section className="contact-hero">
        <span className="contact-tag">
          Contact Us
        </span>

        <h1>Let's Connect</h1>

        <p>
          Have questions, suggestions, or feedback? We'd love to hear
          from you. Reach out and our team will get back to you soon.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-form-card">
          <h2>Send a Message</h2>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>

        <div className="contact-info">

          <div className="info-card">
            <h3>📧 Email</h3>
            <p>support@assignhub.com</p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-card">
            <h3>📍 Address</h3>
            <p>Hyderabad, Telangana, India</p>
          </div>

        </div>

      </section>

      <section className="faq-section">

        <h2>Frequently Asked Questions</h2>

        <div className="faq-container">

          <div className="faq-card">
            <h3>How do I submit an assignment?</h3>
            <p>
              Students can upload assignments through the submission
              portal before the deadline.
            </p>
          </div>

          <div className="faq-card">
            <h3>Can faculty provide feedback?</h3>
            <p>
              Faculty members can review assignments, assign grades,
              and provide detailed feedback.
            </p>
          </div>

          <div className="faq-card">
            <h3>Can I track deadlines?</h3>
            <p>
              The platform provides deadline tracking and reminders
              to help students stay organized.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;