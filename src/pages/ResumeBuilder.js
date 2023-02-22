import React, { useEffect, useContext } from "react";
import EducationForm from "../Layouts/Main/ResumeBuilder/EducationForm";
import KeySkills from "../Layouts/Main/ResumeBuilder/KeySkills";
import NavigationButtons from "../Layouts/Main/ResumeBuilder/NavigationButtons";
import PersonalDetailsForm, {
  ResumeContext
} from "../Layouts/Main/ResumeBuilder/PersonalDetailsForm";
import ProfessionalExperience from "../Layouts/Main/ResumeBuilder/ProfessionalExperience";
import ResumeBuilderIntro from "../Layouts/Main/ResumeBuilder/ResumeBuilderIntro";
import { useAuth } from "../firebase/AuthContext";
import { useNavigate, createSearchParams } from "react-router-dom";

const ResumeBuilder = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const value = useContext(ResumeContext);

  useEffect(() => {
    if (currentUser) {
      navigate("/resumeBuilder");
    } else {
      navigate({
        pathname: "/login",
        search: createSearchParams({ fromPath: "/resumeBuilder" }).toString()
      });
    }
    console.log("in resume builder use effect ", value);
  }, [currentUser, navigate, value]);
  return (
    <div>
      <ResumeBuilderIntro />
      <div style={{ padding: "1rem", marginTop: "3rem" }}>
        <PersonalDetailsForm />
      </div>
      <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
        <EducationForm />
      </div>

      <div>
        <ProfessionalExperience />
      </div>
      <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
        <KeySkills />
      </div>

      <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
        <NavigationButtons />
      </div>
    </div>
  );
};

export default ResumeBuilder;
