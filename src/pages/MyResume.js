import React, { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";

const MyResume = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [resumeData, setResumeData] = useState();
  const [searchParams] = useSearchParams();

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
  }, []);

  return (
    <div id="background">
      <div id="pdf">
        {resumeData !== undefined ? (
          <div>
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
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default MyResume;
