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
        setResumeData(JSON.parse(searchParams.get("resumeData")));
        console.log("resume data ", resumeData);
      }
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <body>
      <div style={{ width: "50%", margin: "auto" }}>
        <div id="pdf">hello</div>
      </div>
    </body>
  );
};

export default MyResume;
