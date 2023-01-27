import React from "react";
import { Box, Grid } from "@mui/material";
import { Colors } from "../../constants/Colors";
import listIcon1 from "../../assets/images/home-dialog-list-icon-1.png";

const BackgroundStyle = {
  margin: "auto",
  width: { md: "20%", sm: "30%", xs: "50%" },
  mt: 10,
  bgcolor: Colors.primaryColor,
  borderRadius: "0.5rem",
  boxShadow: 24,
  p: 4
};

const innerComponentStyle = {
  width: { md: "95%", xs: "100%" },
  margin: "auto",
  height: { md: 100, sm: 60, xs: 60 },
  bgcolor: Colors.white,
  marginBottom: { md: "1rem", sm: "0.5rem", xs: "0.5rem" },
  borderRadius: "1rem"
};

const DialogElement = (props) => {
  return (
    <div>
      <Box sx={{ margin: "auto", width: "90%" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box sx={{ margin: "auto" }}>
              <Box
                component="img"
                sx={{
                  display: "flex",
                  mr: 1,
                  height: { md: "3rem", sm: "2rem", xs: "2rem" },
                  marginBottom: "1rem",
                  width: { xs: "3rem" },
                  marginTop: { md: "0.5rem" }
                }}
                alt="project-rebound-logo"
                src={props.image}
              />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              component="p"
              sx={{
                fontFamily: "Inria Sans",
                fontSize: { md: "1rem", sm: "0.75rem", xs: "0.5rem" },
                color: Colors.primaryColor,
                display: "flex",
                marginBottom: { md: "0.75rem", xs: "0.4rem" },
                marginTop: "-0.1rem",
                marginLeft: { md: "1.5rem", xs: "0.2rem" }
              }}
            >
              {props.heading}
            </Box>
            <Box
              component="p"
              sx={{
                fontFamily: "Inria Sans",
                fontSize: { md: "0.70rem", sm: "0.5rem", xs: "0.3rem" },
                color: Colors.primaryColor,
                display: "flex",
                marginTop: "-0.2rem",
                marginLeft: { md: "1.5rem", xs: "0.2rem" }
              }}
            >
              {props.desc}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

const JobApplicationModal = () => {
  return (
    <Box sx={BackgroundStyle}>
      <div style={{ marginTop: "2rem" }}>
        <Box sx={innerComponentStyle}>
          <DialogElement
            image={listIcon1}
            heading="Search For a Job"
            desc="Identify your skills using our smart skill identification tool!"
          />
        </Box>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Box sx={innerComponentStyle}>
          <DialogElement
            image={listIcon1}
            heading="Search For a Job"
            desc="Identify your skills using our smart skill identification tool!"
          />
        </Box>
      </div>
      <div style={{ marginTop: "2rem" }}>
        <Box sx={innerComponentStyle}>
          <DialogElement
            image={listIcon1}
            heading="Search For a Job"
            desc="Identify your skills using our smart skill identification tool!"
          />
        </Box>
      </div>
    </Box>
  );
};

export default JobApplicationModal;
