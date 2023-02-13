import React, { useState } from "react";
import { Box, TextField, Grid, Fab } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../constants/Colors";
import AddIcon from "@mui/icons-material/Add";

const AddSkills = () => {
  const [inputList, setInputList] = useState([""]);

  const onAddBtnClick = () => {
    setInputList(inputList.concat([""]));
  };

  const onCloseBtnClick = (index) => {
    setInputList(inputList.splice(index, 1));
  };
  // TODO: Fix the button closing problem
  return (
    <Box sx={{ height: "15rem", overflowY: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {inputList.map((e, index) => {
            console.log(index);
            return (
              <Box sx={{ display: "flex" }}>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  sx={{ width: "90%", marginTop: "1rem" }}
                />
                <CloseIcon
                  sx={{ marginTop: "1rem", color: Colors.primaryColor }}
                  onClick={() => {
                    onCloseBtnClick(index);
                  }}
                />
              </Box>
            );
          })}
        </Grid>
      </Grid>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: "1rem"
        }}
      >
        <Fab
          size="medium"
          aria-label="add"
          sx={{
            backgroundColor: Colors.primaryColor,
            color: Colors.white,
            marginTop: "1rem",
            marginLeft: "1rem",
            "&:hover": {
              backgroundColor: Colors.primaryColor
            }
          }}
          onClick={onAddBtnClick}
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
};

export default AddSkills;
