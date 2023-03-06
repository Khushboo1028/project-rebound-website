import React, { useEffect, useState } from "react";
import { Colors } from "../../../../constants/Colors";
import { Box, Grid, TextField, Icon } from "@mui/material";
import { inputStyle } from "../styles";
import { db } from "../../../../firebase/firebase";
import { useAuth } from "../../../../firebase/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";

const PersonalDetailsForm = (props) => {
  const { currentUser } = useAuth();
  let docRef;
  if (currentUser !== null) {
    docRef = doc(db, "users", currentUser.uid);
  }

  const [personalInfo, setPersonalInfo] = useState([
    {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      email: ""
    }
  ]);

  useEffect(() => {
    if (currentUser !== null) {
      const unsubscribe = onSnapshot(docRef, (doc) => {
        const personal_info = doc.data().personal_info;
        setPersonalInfo(personal_info);
      });

      return () => {
        unsubscribe();
      };
    }
  }, []);

  const handleFormChange = (e) => {
    const data = [...personalInfo];
    data[0][e.target.name] = e.target.value;
    setPersonalInfo(data);
    props.dataFromPersonalInfo(personalInfo);
  };

  return (
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
            Personal Details
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
            Please add your personal details
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
      <Grid
        container
        spacing={2}
        sx={{ margin: "auto", width: "97%", paddingRight: "0.5rem" }}
      >
        {/* First Name */}
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
              label="First Name"
              variant="filled"
              value={personalInfo.firstName}
              name="firstname"
              onChange={(e) => {
                handleFormChange(e);
              }}
              focused
            />
          </Box>
        </Grid>

        {/* last name        */}
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
              label="Last Name"
              variant="filled"
              value={personalInfo.lastName}
              name="lastName"
              onChange={(e) => {
                handleFormChange(e);
              }}
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
              <TextField
                sx={inputStyle}
                required
                label="Address"
                variant="filled"
                value={personalInfo.address}
                name="address"
                onChange={(e) => {
                  handleFormChange(e);
                }}
                focused
              />
            </Box>
          </Grid>
        </Grid>

        {/* City */}
        <Grid item md={4} sm={4} xs={12}>
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
              value={personalInfo.city}
              name="city"
              onChange={(e) => {
                handleFormChange(e);
              }}
              focused
            />
          </Box>
        </Grid>

        {/* State */}
        <Grid item md={4} sm={4} xs={12}>
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
              value={personalInfo.state}
              name="state"
              onChange={(e) => {
                handleFormChange(e);
              }}
              focused
            />
          </Box>
        </Grid>

        {/* Zip Code */}
        <Grid item md={4} sm={4} xs={12}>
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
              value={personalInfo.zipCode}
              name="zipCode"
              onChange={(e) => {
                handleFormChange(e);
              }}
              focused
            />
          </Box>
        </Grid>

        {/* Phone */}

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
              label="Phone"
              variant="filled"
              value={personalInfo.phone}
              name="phone"
              onChange={(e) => {
                handleFormChange(e);
              }}
              focused
            />
          </Box>
        </Grid>

        {/* Email */}
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
              label="Email"
              variant="filled"
              value={personalInfo.email}
              name="email"
              onChange={(e) => {
                handleFormChange(e);
              }}
              focused
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalDetailsForm;
