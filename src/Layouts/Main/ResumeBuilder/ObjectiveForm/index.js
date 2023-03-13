import React, { useState, useEffect } from "react";
import { Colors } from "../../../../constants/Colors";
import {
  Box,
  Grid,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { multiLineInputStyle, inputStyle } from "../styles";
import { useAuth } from "../../../../firebase/AuthContext";

const ObjectiveForm = ({ dataFromObjective, dataFromFirebase }) => {
  const { currentUser } = useAuth();
  const [objective, setObjective] = useState("");
  const [isSkipped, setSkipped] = useState(false);
  const [valueChanged, setValueChanged] = useState(0);

  useEffect(() => {
    if (currentUser !== null) {
      if (valueChanged < 1) {
        if (dataFromFirebase !== undefined) {
          const objectiveFirebase = dataFromFirebase.objective;

          if (objectiveFirebase !== null) {
            setObjective(objectiveFirebase);
          } else {
            setObjective("");
            setSkipped(true);
          }
          dataFromObjective({ objective: "objective", isSkipped: isSkipped });
        }
      } else {
        dataFromObjective({ objective: objective, isSkipped: isSkipped });
      }
    }

    // eslint-disable-next-line
  }, [dataFromFirebase, valueChanged]);

  const handleFormChange = (e) => {
    setObjective(e.target.value);
    setValueChanged(valueChanged + 1);
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
            Objective
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
            Give an objective or summary for your choice of .... (To do)
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
                label="Objective / Summary"
                variant="standard"
                multiline
                disabled={isSkipped}
                value={objective}
                name="description"
                onChange={(e) => {
                  handleFormChange(e);
                }}
                rows={4}
              />
            </Box>
          </Grid>
        </Grid>

        {/* This is the isSkipped row */}
        <Grid item xs={12}>
          <FormControlLabel
            sx={inputStyle}
            checked={isSkipped}
            control={<Checkbox sx={inputStyle} />}
            label="Skip Objective"
            onChange={() => {
              setSkipped(!isSkipped);
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ObjectiveForm;
