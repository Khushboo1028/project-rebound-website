import React, { useEffect, useState } from "react";
import KeySkills from "../Layouts/Main/ResumeBuilder/KeySkills";
import NavigationButtons from "../Layouts/Main/ResumeBuilder/NavigationButtons";
import PersonalDetailsForm from "../Layouts/Main/ResumeBuilder/PersonalDetailsForm";
import ResumeBuilderIntro from "../Layouts/Main/ResumeBuilder/ResumeBuilderIntro";
import { useAuth } from "../firebase/AuthContext";
import { useNavigate, createSearchParams } from "react-router-dom";
import EducationBlock from "../Layouts/Main/ResumeBuilder/Education/EducationBlock";
import ProfessionalExperienceBlock from "../Layouts/Main/ResumeBuilder/ProfessionalExperience/ProfessionalExperienceBlock";
import { Timestamp } from "firebase/firestore";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import ObjectiveForm from "../Layouts/Main/ResumeBuilder/ObjectiveForm";

const ResumeBuilder = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState();
  const [educationInfo, setEducationInfo] = useState();
  const [professionalExperienceInfo, setProfessionalExperienceInfo] =
    useState();
  const [skillsInfo, setSkillsInfo] = useState();
  const [objective, setObjective] = useState();

  const resumeData = {
    date_resume_updated: Timestamp.fromDate(new Date()),
    personal_info: personalInfo,
    education_info: educationInfo,
    professional_experience_info: professionalExperienceInfo,
    skills_info: skillsInfo,
    objective: objective
  };

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
    if (personalInfo === undefined) {
      setPersonalInfo([]);
    } else {
      setPersonalInfo(personalInfo);
    }
  };

  const dataFromObjective = (objectiveInfo) => {
    if (personalInfo === undefined) {
      setObjective([]);
    } else {
      setObjective(objectiveInfo);
    }
  };

  const dataFromEducationInfo = (educationInfo) => {
    if (educationInfo === undefined) {
      setEducationInfo([]);
    } else {
      setEducationInfo(educationInfo);
    }
  };

  const dataFromProfessionalExperienceInfo = (professionalExperienceInfo) => {
    if (professionalExperienceInfo === undefined) {
      setProfessionalExperienceInfo([]);
    } else {
      setProfessionalExperienceInfo(professionalExperienceInfo);
    }
  };

  const dataFromSkillsInfo = (skillsInfo) => {
    if (skillsInfo === undefined) {
      setSkillsInfo([]);
    } else {
      setSkillsInfo(skillsInfo);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <ResumeBuilderIntro />
        <div style={{ padding: "1rem", marginTop: "3rem" }}>
          <ObjectiveForm dataFromObjective={dataFromObjective} />
        </div>

        <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
          <PersonalDetailsForm dataFromPersonalInfo={dataFromPersonalInfo} />
        </div>
        <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
          <EducationBlock dataFromEducationInfo={dataFromEducationInfo} />
        </div>

        <div>
          <ProfessionalExperienceBlock
            dataFromProfessionalExperienceInfo={
              dataFromProfessionalExperienceInfo
            }
          />
        </div>
        <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
          <KeySkills dataFromSkillsInfo={dataFromSkillsInfo} />
        </div>

        <div style={{ padding: "1rem", marginTop: "0.5rem" }}>
          <NavigationButtons resumeData={resumeData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeBuilder;
