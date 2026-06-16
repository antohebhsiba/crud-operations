function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Nexcent</h2>
        <p>Copyright © 2026 Nexcent Ltd.</p>
        <p>All rights reserved</p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Company</h3>
          <p>About Us</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>

        <div>
          <h3>Support</h3>
          <p>Help Center</p>
          <p>Terms of Service</p>
          <p>Legal</p>
        </div>

        <div>
          <h3>Stay up to date</h3>
          <input
            type="email"
            placeholder="Your email address"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;