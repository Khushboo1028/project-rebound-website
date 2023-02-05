import React, { useState } from "react";
import { Box, Grid, Icon, TextField } from "@mui/material";
import { Colors } from "../../../../constants/Colors";
import { inputStyle } from "../styles";

const EducationBlock = (props) => {
  return (
    <div>
      {" "}
      {/* Education Block */}
      <Box
        sx={{
          backgroundColor: Colors.backgroundColor,
          height: "auto",
          borderRadius: "1rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          paddingBottom: "2rem",
          width: "100%"
        }}
      >
        <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
          {/* Heading row */}
          <Grid item xs={8}>
            <Box
              sx={{
                fontWeight: "700",
                fontSize: { md: "1rem", sm: "0.5rem", xs: "0.8rem" },
                color: Colors.primaryColor
              }}
            >
              Education/School
            </Box>
            <Box
              sx={{
                fontSize: {
                  md: "1rem",
                  sm: "0.5rem",
                  xs: "0.5rem",
                  fontFamily: "Inria Sans",
                  color: Colors.primaryColor
                }
              }}
            >
              You can add relevant courses, bootcamps or programs that you are
              enrolled in.
            </Box>
          </Grid>
          {/* Help Row */}
          <Grid item xs={4}>
            <Box sx={{ float: "right" }}>
              <Box
                sx={{
                  display: "flex",
                  bgcolor: Colors.white,
                  paddingLeft: "1.2rem",
                  paddingRight: "1.2rem",
                  borderRadius: "0.1rem",
                  fontSize: "1rem",
                  color: Colors.primaryColor,
                  fontWeight: "700"
                }}
              >
                <p>Need Help</p>
                <Icon
                  style={{
                    color: Colors.primaryColor,
                    marginTop: "0.85rem",
                    marginLeft: "0.5rem"
                  }}
                >
                  help_circle
                </Icon>
              </Box>
            </Box>
          </Grid>

          {/* School Name */}
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              autoComplete="off"
            >
              <TextField
                sx={inputStyle}
                required
                label="School Name"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* Start Date*/}
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              autoComplete="off"
            >
              <TextField
                sx={inputStyle}
                required
                label="Start Date"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* School Location */}
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              autoComplete="off"
            >
              <TextField
                sx={inputStyle}
                required
                label="School Location"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* End Date*/}
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              autoComplete="off"
            >
              <TextField
                sx={inputStyle}
                required
                label="End Date"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* Degree */}
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              autoComplete="off"
            >
              <TextField
                sx={inputStyle}
                required
                label="Degree"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* Field of Study */}
          <Grid item xs={6}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              autoComplete="off"
            >
              <TextField
                sx={inputStyle}
                required
                label="Field Of Study"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* Button to add another block */}
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                color: Colors.primaryColor,
                fontSize: "1rem",
                textAlign: "end",
                marginTOp: "0.7rem"
              }}
              onClick={props.method}
            >
              + Add another Education
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default EducationBlock;
