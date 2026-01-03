const Header = () => {
  return (
    <header className="site-header">
      <div className="header-glow" aria-hidden />
      <div className="header-container">
        
        <div className="logo-section">
          <div className="logo-badge">CM</div>
          <div className="brand-text">
            <div className="logo">Contactify</div>
            <span className="tagline">Smart • Secure • Simple</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home" className="nav-pill active">Home</a>
          <a href="#contacts" className="nav-pill">Contacts</a>
          <a href="#about" className="nav-pill outline">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
