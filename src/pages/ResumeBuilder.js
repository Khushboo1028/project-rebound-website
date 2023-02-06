import React from "react";
import EducationForm from "../Layouts/Main/ResumeBuilder/EducationForm";
import PersonalDetailsForm from "../Layouts/Main/ResumeBuilder/PersonalDetailsForm";
import ProfessionalExperience from "../Layouts/Main/ResumeBuilder/ProfessionalExperience";
import ResumeBuilderIntro from "../Layouts/Main/ResumeBuilder/ResumeBuilderIntro";

const ResumeBuilder = () => {
  return (
    <div>
      <ResumeBuilderIntro />
      <div style={{ padding: "1rem", marginTop: "3rem" }}>
        <PersonalDetailsForm />
      </div>
      <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
        <EducationForm />
      </div>

      <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
        <ProfessionalExperience />
      </div>
    </div>
  );
};

export default ResumeBuilder;
