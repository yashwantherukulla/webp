import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Student Admission System</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admission-form">Admission Form</Link>
          </li>
          <li>
            <Link to="/admission-status">Check Status</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
