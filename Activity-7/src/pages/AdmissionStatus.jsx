import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/AdmissionStatus.css";

function AdmissionStatus() {
  const location = useLocation();
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState("");

  // Display submission data if coming from form submission
  const submittedData = location.state?.formData;
  const isSubmission = location.state?.isSubmission;

  const handleSearch = (e) => {
    e.preventDefault();
    setError("");

    if (!searchId.trim()) {
      setError("Please enter an application ID");
      return;
    }

    // Retrieve from localStorage
    const applications = JSON.parse(
      localStorage.getItem("applications") || "[]"
    );
    const application = applications.find(
      (app) => app.applicationId === searchId
    );

    if (application) {
      setSearchResult(application);
    } else {
      setError("Application not found. Please verify your application ID.");
      setSearchResult(null);
    }
  };

  return (
    <div className="status-container">
      {isSubmission ? (
        <div className="submission-confirmation">
          <h2>Application Submitted Successfully!</h2>
          <p>
            Thank you for submitting your application. Your application has been
            received and is being processed.
          </p>
          <div className="application-details">
            <h3>Application Details:</h3>
            <p>
              <strong>Application ID:</strong> {submittedData.applicationId}
            </p>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Phone:</strong> {submittedData.phone}
            </p>
            <p>
              <strong>Address:</strong> {submittedData.address}
            </p>
            <p>
              <strong>Preferred Course:</strong> {submittedData.course}
            </p>
            <p>
              <strong>Status:</strong> {submittedData.status}
            </p>
          </div>
          <p>Please save your application ID for future reference.</p>
        </div>
      ) : (
        <div className="status-check">
          <h2>Check Admission Status</h2>
          <form onSubmit={handleSearch}>
            <div className="form-group">
              <label>Enter Application ID:</label>
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="e.g., APP123456"
              />
            </div>
            <button type="submit" className="search-btn">
              Check Status
            </button>
          </form>

          {error && <p className="error">{error}</p>}

          {searchResult && (
            <div className="search-result">
              <h3>Application Found</h3>
              <div className="application-details">
                <p>
                  <strong>Application ID:</strong> {searchResult.applicationId}
                </p>
                <p>
                  <strong>Name:</strong> {searchResult.name}
                </p>
                <p>
                  <strong>Email:</strong> {searchResult.email}
                </p>
                <p>
                  <strong>Phone:</strong> {searchResult.phone}
                </p>
                <p>
                  <strong>Address:</strong> {searchResult.address}
                </p>
                <p>
                  <strong>Preferred Course:</strong> {searchResult.course}
                </p>
                <p>
                  <strong>Status:</strong> {searchResult.status}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdmissionStatus;
