import React from "react";
import { Box, Grid, Button } from "@mui/material";
import { formBackground } from "../styles";
import { Colors } from "../../../../constants/Colors";

const NavigationButtons = () => {
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
              {" "}
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
