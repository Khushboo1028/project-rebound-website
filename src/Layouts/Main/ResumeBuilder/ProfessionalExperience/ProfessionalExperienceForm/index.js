import React, { useEffect, useState } from "react";
import { inputStyle, multiLineInputStyle } from "../../styles";
import {
  Box,
  Grid,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { Colors } from "../../../../../constants/Colors";

import { useAuth } from "../../../../../firebase/AuthContext";

const ProfessionalExperienceForm = ({
  dataFromProfessionalExperienceInfo,
  dataFromFirebase
}) => {
  const { currentUser } = useAuth();

  const [inputList, setInputList] = useState([
    {
      position: "",
      startDate: "",
      endDate: "",
      companyName: "",
      description: "",
      isEndDate: false
    }
  ]);

  useEffect(() => {
    if (currentUser !== null) {
      if (dataFromFirebase !== undefined) {
        const professionalExperienceFirebaseData =
          dataFromFirebase.professional_experience_info;
        if (
          professionalExperienceFirebaseData !== undefined &&
          professionalExperienceFirebaseData !== null
        ) {
          setInputList(professionalExperienceFirebaseData);
        }
      }
    }

    // eslint-disable-next-line
  }, [dataFromFirebase]);

  const onAddBtnClick = () => {
    let newField = {
      position: "",
      startDate: "",
      endDate: "",
      companyName: "",
      description: "",
      isEndDate: false
    };

    setInputList([...inputList, newField]);
  };

  const removeEducationBtnClick = (index) => {
    let data = [...inputList];
    data.splice(index, 1);
    setInputList(data);
    dataFromProfessionalExperienceInfo(data);
  };

  const handleFormChange = (index, event) => {
    const data = [...inputList];
    data[index][event.target.name] = event.target.value;
    setInputList(data);
    dataFromProfessionalExperienceInfo(inputList);
  };

  const experienceFormFunction = inputList.map((input, index) => {
    return (
      <Box key={index}>
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
              Experience #{index + 1}
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
              - Remove Experience
            </Box>
          </Grid>
        </Grid>
        <Grid
          key={index}
          id={`experience-form-${index}`}
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
                label="Position"
                variant="filled"
                focused
                value={input.position}
                name="position"
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
                label="Start Date"
                variant="filled"
                focused
                value={input.startDate}
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
                label="Company Name"
                variant="filled"
                value={input.companyName}
                name="companyName"
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
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
                label="End Date"
                variant="filled"
                focused
                value={input.endDate}
                name="endDate"
                onChange={(e) => {
                  handleFormChange(index, e);
                }}
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
                  label="Description"
                  variant="standard"
                  multiline
                  value={input.description}
                  name="description"
                  onChange={(e) => {
                    handleFormChange(index, e);
                  }}
                  rows={4}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  });

  return (
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
      <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
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
            Add your most recent experience and continue in descending order
          </Box>
        </Grid>

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

      {experienceFormFunction}
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
  );
};

export default ProfessionalExperienceForm;

//TODO: Fix props for data from firebase to send to main page
