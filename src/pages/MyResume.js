import React, { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Colors } from "../constants/Colors";

const MyResume = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [resumeData, setResumeData] = useState();
  const [searchParams] = useSearchParams();
  const [showPrintButton, setShowPrintButton] = useState(true);
  // const [pdfStyle, setpdfStyle] = useState(true);

  useEffect(() => {
    if (currentUser) {
      if (!searchParams.get("resumeData")) {
        navigate("/");
      } else {
        let data = JSON.parse(searchParams.get("resumeData"));
        setResumeData(data);
      }
    } else {
      navigate("/login");
    }

    console.log("resume data ", resumeData);

    if (!showPrintButton) {
      window.print();
      setShowPrintButton(true);
    }
  }, [showPrintButton]);

  const printResume = () => {
    setShowPrintButton(false);
  };

  return (
    <div>
      <div id="background">
        <div id="pdf">
          {resumeData !== undefined ? (
            <div>
              <div>
                <div style={{ textAlign: "right" }}>
                  {showPrintButton ? (
                    <Button
                      sx={{
                        background: Colors.primaryColor,
                        color: Colors.white,
                        marginTop: "0.5rem",
                        marginRight: "0.5rem",
                        "&:hover": {
                          background: Colors.primaryColor,
                          color: Colors.white
                        }
                      }}
                      onClick={printResume}
                    >
                      Print Resume
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <div id="name">
                {resumeData.personal_info.firstName +
                  " " +
                  resumeData.personal_info.lastName}
              </div>

              <div id="desc">
                {resumeData.personal_info.address +
                  ", " +
                  resumeData.personal_info.city +
                  ", " +
                  resumeData.personal_info.state +
                  " " +
                  resumeData.personal_info.zipCode}
              </div>

              <div id="heading">Education</div>
              <hr></hr>
              <div>
                {resumeData.education_info.map((e, index) => {
                  return (
                    <div style={{ marginBottom: "1rem" }} key={index}>
                      <div id="educationContainer">
                        <div id="subHeading">{e.schoolName}</div>
                        <div id="location">{e.schoolLocation}</div>
                      </div>
                      <div id="educationContainer">
                        {/* add field of study near degree */}
                        <div id="info">{e.degree}</div>
                        <div id="date">{e.startDate + " - " + e.endDate}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div id="heading">Experience</div>
              <hr></hr>
              {resumeData.professional_experience_info.map((e, index) => {
                return (
                  <div style={{ marginBottom: "1rem" }} key={index}>
                    <div id="educationContainer">
                      <div id="subHeading">{e.companyName}</div>
                      <div id="date">{e.startDate + " - " + e.endDate}</div>
                    </div>
                    <div id="info">{e.position}</div>
                    <div id="info">{e.description}</div>
                  </div>
                );
              })}
              <div id="heading">Skills</div>
              <hr></hr>
              {resumeData.skills_info.map((e, index) => {
                return (
                  <div style={{ marginBottom: "0.3rem" }} key={index}>
                    <div id="subHeading">{e}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
