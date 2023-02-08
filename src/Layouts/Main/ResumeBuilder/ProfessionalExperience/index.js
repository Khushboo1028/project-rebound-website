import React, { useState } from "react";
import { Colors } from "../../../../constants/Colors";
import {
  Box,
  Grid,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { inputStyle, multiLineInputStyle, btnClickStyle } from "../styles";

const ProfessionalExperience = () => {
  const [inputList, setInputList] = useState([]);

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
  const onAddBtnClick = () => {
    setInputList(
      inputList.concat(
        <div style={{ marginTop: "2rem" }}>
          <Box sx={btnClickStyle}>Experience #{inputList.length + 2}</Box>
          <ExperienceForm />
        </div>
      )
    );
  };

  const ExperienceForm = () => {
    return (
      <Grid
        id="education-form"
        container
        spacing={2}
        sx={{ margin: "auto", width: "97%", paddingRight: "0.5rem" }}
      >
        {/* Position */}
        <Grid item md={6} sm={6} xs={12}>
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
              label="Position"
              variant="filled"
              focused
              InputProps={{
                disableUnderline: true
              }}
            />
          </Box>
        </Grid>

        {/* Start Date*/}
        <Grid item md={6} sm={6} xs={12}>
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
              InputProps={{
                disableUnderline: true
              }}
            />
          </Box>
        </Grid>

        {/* Company Name */}
        <Grid item md={6} sm={6} xs={12}>
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
              label="Company Name"
              variant="filled"
              focused
              InputProps={{
                disableUnderline: true
              }}
            />
          </Box>
        </Grid>

        {/* End Date*/}
        <Grid item md={6} sm={6} xs={12}>
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
              InputProps={{
                disableUnderline: true
              }}
            />
          </Box>
        </Grid>

        {/* Checkbox*/}
        <Grid item md={6} sm={6} xs={12}></Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { width: "100%" }
            }}
            autoComplete="off"
          >
            <FormControlLabel
              sx={inputStyle}
              control={<Checkbox sx={inputStyle} />}
              label="I am currently enrolled here"
            />
          </Box>
        </Grid>

        {/* Description row */}
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              autoComplete="off"
            >
              <TextField
                sx={multiLineInputStyle}
                InputProps={{
                  disableUnderline: true
                }}
                required
                label="Description"
                variant="standard"
                multiline
                rows={4}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    );
  };

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
          <Box
            sx={{
              backgroundColor: Colors.backgroundColor,
              height: "auto",
              borderRadius: "1rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              margin: "auto",
              paddingBottom: "2rem",
              width: "98%"
            }}
          >
            {/* Heading row */}
            <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
              {/* Heading Text */}
              <Grid item md={8} xs={8}>
                <Box
                  sx={{
                    fontWeight: "700",
                    fontSize: { md: "1.3rem", sm: "1rem", xs: "1.2rem" },
                    color: Colors.primaryColor
                  }}
                >
                  Recent Professional Experience
                </Box>
                <Box
                  sx={{
                    fontSize: {
                      md: "1rem",
                      sm: "0.8rem",
                      xs: "0.8rem",
                      fontFamily: "Inria Sans",
                      color: Colors.primaryColor
                    }
                  }}
                >
                  Add your most recent experience and continue in descending
                  order
                </Box>
              </Grid>
              {/* Help Button */}
              <Grid item md={4} xs={4}>
                <Box
                  sx={{
                    float: "right",
                    display: "flex",
                    bgcolor: { md: Colors.white, sm: Colors.white, xs: "None" },
                    paddingRight: { md: "1.2rem", sm: "1rem", xs: "0.5rem" },
                    paddingLeft: { md: "1.2rem", sm: "1rem", xs: "0.5rem" },
                    marginRight: "0.5rem"
                  }}
                >
                  <Box
                    sx={{
                      display: { md: "flex", sm: "flex", xs: "None" },
                      borderRadius: "0.1rem",
                      fontSize: { md: "1rem", sm: "0.7rem", xs: "0.7rem" },
                      color: Colors.primaryColor,
                      fontWeight: "700"
                    }}
                  >
                    <p>Need Help</p>
                  </Box>
                  <Box
                    sx={{
                      color: Colors.primaryColor,
                      marginTop: { md: "0.85rem", sm: "0.5rem", xs: "0 " },
                      marginLeft: "0.5rem"
                    }}
                  >
                    <Icon>help_circle</Icon>
                  </Box>
                </Box>
              </Grid>
              <ExperienceForm />
              {inputList}
            </Grid>

            {/* Button to add another block */}
            <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
              <Grid item md={6} xs={3}></Grid>
              <Grid item md={6} xs={9}>
                <Box
                  sx={{
                    color: Colors.primaryColor,
                    fontSize: { sm: "1rem", xs: "0.8rem" },
                    textAlign: "end",
                    marginTop: "1rem",
                    paddingRight: "1rem"
                  }}
                  onClick={onAddBtnClick}
                >
                  + Add Another Experience
                </Box>
              </Grid>
            </Grid>
          </Box>
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

export default ProfessionalExperience;
