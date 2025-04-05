import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>&copy; 2024 Student Admission System. All rights reserved.</p>
      </div>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
