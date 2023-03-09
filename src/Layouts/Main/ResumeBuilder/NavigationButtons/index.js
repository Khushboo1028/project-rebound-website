import React, { useState } from "react";
import { Box, Grid, Button, Modal } from "@mui/material";
import { formBackground } from "../styles";
import { Colors } from "../../../../constants/Colors";
import { updateData } from "../../../../firebase/firebaseReadWrite";
import { useAuth } from "../../../../firebase/AuthContext";
import { db } from "../../../../firebase/firebase";
import { doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import PDFPage from "../../../../pages/PDFPage";

const NavigationButtons = ({ resumeData, dataFromFirebase }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  let docRef;
  if (currentUser !== null) {
    docRef = doc(db, "users", currentUser.uid);
  }

  const [isResumeBtnClicked, setResumeBtnClicked] = useState(false);

  const generatePdf = () => {
    if (resumeData.education_info === undefined) {
      resumeData.education_info = dataFromFirebase.education_info;
    }
    if (resumeData.professional_experience_info === undefined) {
      resumeData.professional_experience_info =
        dataFromFirebase.professional_experience_info;
    }

    if (JSON.stringify(resumeData.personal_info) === "{}") {
      resumeData.personal_info = dataFromFirebase.personal_info;
    }

    console.log("data to send: ", resumeData);
    updateData(docRef, resumeData);

    setResumeBtnClicked(true);
  };

  const openResumeDownloadModel = () => {
    const handleClose = () => setResumeBtnClicked(false);

    return (
      <Modal
        open={isResumeBtnClicked}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <PDFPage resumeData={resumeData} />
      </Modal>
    );
  };

  return (
    <Box sx={formBackground}>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: Colors.primaryColor,
                maxWidth: { md: "8rem", sm: "7rem", xs: "8rem" },
                minWidth: { md: "8rem", sm: "7rem", xs: "8rem" },
                fontSize: { md: "1rem", sm: "0.7rem", xs: "0.5rem" },

                "&:hover": { backgroundColor: Colors.primaryColor }
              }}
            >
              Back
            </Button>
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.primaryColor,
                  fontSize: { md: "1rem", sm: "0.7rem", xs: "0.5rem" },
                  "&:hover": { backgroundColor: Colors.primaryColor }
                }}
              >
                Share For Feedback
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: Colors.primaryColor,
                  fontSize: { md: "1rem", sm: "0.7rem", xs: "0.5rem" },
                  marginLeft: "1rem",
                  "&:hover": { backgroundColor: Colors.primaryColor }
                }}
                onClick={generatePdf}
              >
                Generate PDF
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <div>{openResumeDownloadModel()}</div>
    </Box>
  );
};

export default NavigationButtons;
