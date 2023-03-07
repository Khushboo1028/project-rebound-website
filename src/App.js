import Home from "../src/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobSupport from "./pages/JobSupport";
import ResumeBuilder from "./pages/ResumeBuilder";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { AuthProvider } from "./firebase/AuthContext";
import UserInformation from "./pages/UserInformation";
import MyResume from "./pages/MyResume";
import PDFPage from "./pages/PDFPage";

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

          <Route path="/generateResume" element={<PDFPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
