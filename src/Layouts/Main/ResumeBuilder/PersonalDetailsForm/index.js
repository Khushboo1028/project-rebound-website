import React from "react";
import { Colors } from "../../../../constants/Colors";
import { Box, Grid, TextField, Icon } from "@mui/material";
import { inputStyle } from "../styles";

const PersonalDetailsForm = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: Colors.backgroundColor,
          height: "auto",
          borderRadius: "1rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          paddingBottom: "2rem",
          width: "90%"
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
              Personal Details
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
              Please add your personal details
            </Box>
          </Grid>
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

          {/* First Name */}
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
                label="First Name"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* last name        */}
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
                label="Last Name"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* address row */}
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { width: "100%" }
                }}
                autoComplete="off"
              >
                {/* <TextField
                  sx={inputStyle}
                  required
                  id="filled-multiline-static"
                  label="Address"
                  multiline
                  rows={4}
                  defaultValue="Default Valueeeee"
                  variant="filled"
                /> */}
                <TextField
                  sx={inputStyle}
                  required
                  label="Address"
                  variant="filled"
                  focused
                />
              </Box>
            </Grid>
          </Grid>

          {/* City */}
          <Grid item xs={4}>
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
                label="City"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* State */}
          <Grid item xs={4}>
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
                label="State"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* Zip Code */}
          <Grid item xs={4}>
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
                label="Zip Code"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* Phone */}

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
                label="Phone"
                variant="filled"
                focused
              />
            </Box>
          </Grid>

          {/* Email */}
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
                label="Email"
                variant="filled"
                focused
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PersonalDetailsForm;