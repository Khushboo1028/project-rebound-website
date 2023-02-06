import React, { useState } from "react";
import { Box, Grid, Icon, TextField } from "@mui/material";
import { Colors } from "../../../../constants/Colors";
import { inputStyle, btnClickStyle, formBackground } from "../styles";

const EducationForm = () => {
  const [inputList, setInputList] = useState([]);

  const education_list = [
    "High School",
    "GED",
    "College (Courses)",
    "Vocational Training"
  ];

  const onAddBtnClick = () => {
    setInputList(
      inputList.concat(
        <div style={{ marginTop: "2rem" }}>
          <Box sx={btnClickStyle}>Education #{inputList.length + 2}</Box>
          <EducationForm />
        </div>
      )
    );
  };

  const EducationForm = () => {
    return (
      <Grid
        id="education-form"
        container
        spacing={2}
        sx={{ margin: "auto", width: "97%", paddingRight: "0.5rem" }}
      >
        {/* School Name */}
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
              label="School Name"
              variant="filled"
              focused
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
            />
          </Box>
        </Grid>

        {/* School Location */}
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
              label="School Location"
              variant="filled"
              focused
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
            />
          </Box>
        </Grid>

        {/* Degree */}
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
              label="Degree"
              variant="filled"
              focused
            />
          </Box>
        </Grid>

        {/* Field of Study */}
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
              label="Field Of Study"
              variant="filled"
              focused
            />
          </Box>
        </Grid>
      </Grid>
    );
  };

  const EducationBlock = () => {
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
            width: "100%",
            marginBottom: "2rem"
          }}
        >
          <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
            {/* Heading row */}
            <Grid item md={8} xs={8}>
              <Box
                sx={{
                  fontWeight: "700",
                  fontSize: { md: "1.3rem", sm: "1rem", xs: "1.2rem" },
                  color: Colors.primaryColor
                }}
              >
                Education/School
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
                You can add relevant courses, bootcamps or programs that you are
                enrolled in.
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
          </Grid>
          <EducationForm />
          {inputList}
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
                + Add Another Education
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    );
  };

  return (
    <div>
      <Box sx={formBackground}>
        <Grid container spacing={2}>
          <Grid item sm={9} xs={12} order={{ xs: 2, md: 1, sm: 1 }}>
            <Box>
              <EducationBlock />
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
                padding: "0.5rem"
              }}
            >
              <Grid container spacing={2} sx={{ margin: "auto" }}>
                <Box
                  sx={{
                    fontFamily: "Inria Sans",
                    fontSize: { md: "1.3rem", sm: "1rem", xs: "1.2rem" },
                    color: Colors.primaryColor,
                    fontWeight: 700
                  }}
                >
                  Remember to list your different degrees!
                </Box>
                <Box sx={{ marginTop: "0.5rem" }}>
                  {education_list.map((e) => (
                    <Box
                      sx={{
                        marginLeft: {
                          md: "0.5rem",
                          sm: "0.5rem",
                          xs: "1.1rem"
                        },
                        fontFamily: "Inria Sans",
                        color: Colors.primaryColor,
                        marginBottom: "0.5",
                        fontSize: { md: "1.1rem", sm: "1rem", xs: "1.1rem" }
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
    </div>
  );
};

export default EducationForm;
