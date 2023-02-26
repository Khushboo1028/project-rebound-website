import React, { useState } from "react";
import { Box, Grid, Icon, TextField } from "@mui/material";
import { Colors } from "../../../../../constants/Colors";
import {
  inputStyle,
  educationFormContainer,
  educationFormSubtitle,
  educationFormTitle,
  helpButtonContainer
} from "../../styles";

const EducationForm = (props) => {
  const [inputList, setInputList] = useState([
    {
      schoolName: "",
      startDate: "",
      endDate: "",
      schoolLocation: "",
      degree: "",
      fieldOfStudy: ""
    }
  ]);

  const onAddBtnClick = () => {
    let newField = {
      schoolName: "",
      startDate: "",
      endDate: "",
      schoolLocation: "",
      degree: "",
      fieldOfStudy: ""
    };

    setInputList([...inputList, newField]);
  };

  const removeEducationBtnClick = (index) => {
    let data = [...inputList];
    data.splice(index, 1);
    setInputList(data);
  };

  const handleFormChange = (index, event) => {
    const data = [...inputList];
    data[index][event.target.name] = event.target.value;
    setInputList(data);

    props.dataFromEducationInfo(inputList);
  };

  const educationFormFunction = inputList.map((input, index) => {
    return (
      <Box key={index}>
        {index === 0 ? (
          <div></div>
        ) : (
          <Grid
            container
            spacing={2}
            sx={{
              margin: "auto",
              width: "97%",
              paddingRight: "0.5rem",
              marginTop: "1rem"
            }}
          >
            <Grid item md={6} sm={6} xs={12} order={{ xs: 1 }}>
              <Box
                sx={{
                  width: "97%",
                  margin: "auto",
                  color: Colors.primaryColor,
                  fontWeight: "700"
                }}
              >
                Education #{index + 1}
              </Box>
            </Grid>

            <Grid item md={6} sm={6} xs={12} order={{ xs: 1 }}>
              <Box
                sx={{
                  color: Colors.primaryColor,
                  fontSize: { sm: "1rem", xs: "0.8rem" },
                  textAlign: "right",
                  paddingRight: "1rem",
                  cursor: "pointer"
                }}
                onClick={() => {
                  removeEducationBtnClick(index);
                }}
              >
                - Remove Education
              </Box>
            </Grid>
          </Grid>
        )}
        <Grid
          key={index}
          id={`education-form-${index}`}
          container
          spacing={2}
          sx={{ margin: "auto", width: "97%", paddingRight: "0.5rem" }}
        >
          {/* School Name */}
          <Grid item md={6} sm={6} xs={12} order={{ xs: 1 }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              id={`schoolName-${index}`}
            >
              <TextField
                sx={inputStyle}
                required
                label="School Name"
                variant="filled"
                value={input.schoolName}
                name="schoolName"
                focused
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Box>
          </Grid>

          {/* Start Date*/}
          <Grid item md={6} sm={6} xs={12} order={{ xs: 2 }}>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { width: "100%" }
              }}
              autoComplete="off"
              id={`startDate-${index}`}
            >
              <TextField
                sx={inputStyle}
                required
                label="Start Date"
                variant="filled"
                value={input.startDate}
                focused
                name="startDate"
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Box>
          </Grid>

          {/* School Location */}
          <Grid item md={6} sm={6} xs={12} order={{ xs: 4 }}>
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
                value={input.schoolLocation}
                focused
                name="schoolLocation"
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
                id={`schoolLocation-${index}`}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Box>
          </Grid>

          {/* End Date*/}
          <Grid item md={6} sm={6} xs={12} order={{ xs: 3 }}>
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
                value={input.endDate}
                name="endDate"
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
                id={`endDate-${index}`}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Box>
          </Grid>

          {/* Degree */}
          <Grid item md={6} sm={6} xs={12} order={{ xs: 5 }}>
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
                focused
                variant="filled"
                value={input.degree}
                name="degree"
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
                id={`degree-${index}`}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Box>
          </Grid>

          {/* Field of Study */}
          <Grid item md={6} sm={6} xs={12} order={{ xs: 6 }}>
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
                focused
                variant="filled"
                value={input.fieldOfStudy}
                name="fieldOfStudy"
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
                id={`fieldOfStudy-${index}`}
                InputProps={{
                  disableUnderline: true
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  });

  return (
    <Box sx={educationFormContainer}>
      <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
        {/* Heading Row */}

        <Grid item md={8} xs={8}>
          <Box sx={educationFormTitle}>Education/School</Box>
          <Box sx={educationFormSubtitle}>
            You can add relevant courses, bootcamps or programs that you are
            enrolled in.
          </Box>
        </Grid>

        {/* Help Button */}
        <Grid item md={4} xs={4}>
          <Box sx={helpButtonContainer}>
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

      {educationFormFunction}

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
              paddingRight: "1rem",
              cursor: "pointer"
            }}
            onClick={onAddBtnClick}
          >
            + Add Another Education
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationForm;
