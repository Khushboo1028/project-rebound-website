import React, { useEffect } from "react";
import { Box, Grid, Button } from "@mui/material";
import { formBackground } from "../styles";
import { Colors } from "../../../../constants/Colors";
import { updateData } from "../../../../firebase/firebaseReadWrite";
import { useAuth } from "../../../../firebase/AuthContext";
import { db } from "../../../../firebase/firebase";
import { doc } from "firebase/firestore";
import { useNavigate, createSearchParams } from "react-router-dom";

const NavigationButtons = ({ resumeData }) => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  let docRef;
  if (currentUser !== null) {
    docRef = doc(db, "users", currentUser.uid);
  }

  const generatePdf = () => {
    console.log(resumeData);
    updateData(docRef, resumeData);

    navigate({
      pathname: "/generateResume",
      search: createSearchParams({
        resumeData: JSON.stringify(resumeData)
      }).toString()
    });
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
    </Box>
  );
};

export default NavigationButtons;
