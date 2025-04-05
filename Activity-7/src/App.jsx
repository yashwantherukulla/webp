import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdmissionForm from "./pages/AdmissionForm";
import AdmissionStatus from "./pages/AdmissionStatus";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/webp/Activity-7" element={<Home />} />
            <Route path="/webp/Activity-7/admission-form" element={<AdmissionForm />} />
            <Route path="/webp/Activity-7/admission-status" element={<AdmissionStatus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
