const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Contactify</h2>

        <p className="about-subtitle">
          A modern, secure, and responsive contact management system
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>⚡ Fast & Real-Time</h3>
            <p>
              Built with MERN stack to ensure instant updates, smooth UX,
              and real-time contact management.
            </p>
          </div>

          <div className="about-card">
            <h3>🔐 Secure & Reliable</h3>
            <p>
              Clean API architecture with proper validations
              ensures data integrity and reliability.
            </p>
          </div>

          <div className="about-card">
            <h3>🎨 Modern UI</h3>
            <p>
              Designed with a clean, minimal interface,
              optimized for both desktop and mobile devices.
            </p>
          </div>
        </div>

        <p className="about-footer">
          Designed & Developed by <strong>Vipul Kumar</strong>
        </p>
      </div>
    </section>
  );
};

export default About;
