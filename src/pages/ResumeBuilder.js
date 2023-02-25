import React, { useEffect, useState } from "react";
import KeySkills from "../Layouts/Main/ResumeBuilder/KeySkills";
import NavigationButtons from "../Layouts/Main/ResumeBuilder/NavigationButtons";
import PersonalDetailsForm from "../Layouts/Main/ResumeBuilder/PersonalDetailsForm";
import ProfessionalExperience from "../Layouts/Main/ResumeBuilder/ProfessionalExperience";
import ResumeBuilderIntro from "../Layouts/Main/ResumeBuilder/ResumeBuilderIntro";
import { useAuth } from "../firebase/AuthContext";
import { useNavigate, createSearchParams } from "react-router-dom";
import EducationBlock from "../Layouts/Main/ResumeBuilder/EducationBlock";

const ResumeBuilder = () => {
  // eslint-disable-next-line
  const [personalInfo, setPersonalInfo] = useState("");
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/resumeBuilder");
    } else {
      navigate({
        pathname: "/login",
        search: createSearchParams({ fromPath: "/resumeBuilder" }).toString()
      });
    }
  }, [currentUser, navigate]);

  const dataFromPersonalInfo = (personalInfo) => {
    setPersonalInfo(personalInfo);
  };

  return (
    <div>
      <ResumeBuilderIntro />
      <div style={{ padding: "1rem", marginTop: "3rem" }}>
        <PersonalDetailsForm dataFromPersonalInfo={dataFromPersonalInfo} />
      </div>
      <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
        <EducationBlock />
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
