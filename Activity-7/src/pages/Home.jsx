import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Student Admission System</h2>
      <div className="welcome-content">
        <p>
          Thank you for considering our institution for your education journey.
          Our admission process is designed to be straightforward and
          student-friendly.
        </p>

        <h3>Admission Process:</h3>
        <ol>
          <li>
            Fill out the online application form with your personal details
          </li>
          <li>Submit the form and receive your application ID</li>
          <li>Track your admission status using your application ID</li>
          <li>Complete any additional requirements if requested</li>
        </ol>

        <p>
          Our institution offers various courses in Science, Technology,
          Engineering, Arts, and Mathematics, providing quality education to
          help you achieve your career goals.
        </p>

        <div className="cta-button">
          <Link to="/admission-form">Apply Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
