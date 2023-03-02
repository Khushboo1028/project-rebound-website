import Home from "../src/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import JobSupport from "./pages/JobSupport";
import ResumeBuilder from "./pages/ResumeBuilder";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./firebase/AuthContext";
import { ResumeContext } from "./Layouts/Main/ResumeBuilder/PersonalDetailsForm";
import UserInformation from "./pages/UserInformation";
import MyResume from "./pages/MyResume";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<Home />} />

          {/* protected routes */}
          <Route path="/jobSupport" element={<JobSupport />} />
          <Route path="/resumeBuilder" element={<ResumeBuilder />} />
          <Route path="/userInformation" element={<UserInformation />} />

          <Route path="/myResume" element={<MyResume />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
