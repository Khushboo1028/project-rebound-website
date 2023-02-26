import React from "react";
import { Colors } from "../../../../../constants/Colors";
import { Box, Grid } from "@mui/material";
import ExperienceForm from "../ExperienceForm";

const ProfessionalExperienceBlock = () => {
  const experience_list = [
    "Time Management",
    "Organizational Skills",
    "Technical Skills",
    "Attention to Detail",
    "Identifying Problems",
    "Planning",
    "Observational Skills",
    "Supervising/Management"
  ];

  return (
    <Box
      sx={{
        height: "auto",
        borderRadius: "1rem",
        margin: "auto",
        paddingBottom: "2rem",
        width: "90%"
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={9} sm={9} xs={12} order={{ xs: 2, md: 1, sm: 1 }}>
          <ExperienceForm />
        </Grid>

        <Grid item sm={3} xs={12} order={{ xs: 1, md: 2, sm: 2 }}>
          {/* Notes Block */}
          <Box
            sx={{
              backgroundColor: Colors.backgroundColor,
              height: "auto",
              borderRadius: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              margin: "auto",
              padding: "0.5rem",
              width: "100%"
            }}
          >
            <Grid container spacing={2} sx={{ margin: "auto" }}>
              <Box
                sx={{
                  fontFamily: "Inria Sans",
                  fontSize: { md: "1.2rem", sm: "1rem", xs: "1rem" },
                  color: Colors.primaryColor,
                  fontWeight: 700
                }}
              >
                You had previously listed these skills that you wanted to
                highlight!
              </Box>
              <Box sx={{ marginTop: "0.5rem" }}>
                {experience_list.map((e) => (
                  <Box
                    sx={{
                      marginLeft: {
                        md: "0.5rem",
                        sm: "0.5rem",
                        xs: "1.1rem"
                      },
                      fontFamily: "Inria Sans",
                      color: Colors.primaryColor,
                      marginBottom: "0.5rem",
                      fontSize: { md: "1.1rem", sm: "0.8rem", xs: "0.8rem" }
                    }}
                  >
                    - {e}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfessionalExperienceBlock;
