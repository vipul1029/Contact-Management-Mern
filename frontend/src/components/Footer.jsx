const Footer = () => {
  return (
    <footer className="site-footer dark-footer">
      <div className="footer-container">
        {/* Brand / About */}
        <div className="footer-brand">
          <h3>Contactify</h3>
          <p className="footer-desc">
            A modern MERN stack contact management application focused on clean UI,
            performance, and real-time interaction.
          </p>

          <p className="footer-author">
            Designed & Developed by <strong>Vipul Kumar</strong>
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Connect with me</h4>
          <a
            href="https://github.com/vipul1029"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://portfolio-vipul1007s-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/vipul-kumar-7697a428a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        {/* Tech Stack */}
        <div className="footer-tech">
          <h4>Tech Stack</h4>
          <p>React · Node.js · Express · MongoDB</p>
          <p>REST APIs · Axios · Vercel</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
