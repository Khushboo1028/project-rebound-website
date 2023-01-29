import Home from "../src/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import JobSupport from "./pages/JobSupport";
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/jobSupport" element={<JobSupport />} />
        <Route exact path="/resumeBuilder" element={<ResumeBuilder />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
