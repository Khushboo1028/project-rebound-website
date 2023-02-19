import React, { useState } from "react";
import { Box, TextField, Grid, Fab, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../constants/Colors";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";

let nextId = 0;

const AddSkills = () => {
  const [item, setItem] = useState("");
  // let listItem = { id: nextId, name: item };
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = () => {
    if (item !== "") {
      setInputList([...inputList, { id: nextId++, name: item }]);
    }
    setItem("");
    console.log("input list ", inputList);
  };

  const onCloseBtnClick = (id) => {
    setInputList(inputList.filter((a) => a.id !== id));
    console.log("input list ", inputList);
  };

  // TODO: get the data to be saved
  const onCheckBtnClick = () => {
    console.log("input list is ", inputList);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex" }}>
            <TextField
              id="standard-basic"
              variant="standard"
              value={item}
              placeholder="Type Skills Here"
              onChange={(e) => setItem(e.target.value)}
              sx={{ width: "90%", marginTop: "1rem" }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  onAddBtnClick();
                }
              }}
            />
            <Fab
              size="medium"
              aria-label="add"
              sx={{
                backgroundColor: Colors.white,
                color: Colors.primaryColor,
                marginTop: "1rem",
                marginLeft: "1rem",
                marginBottom: "1rem",
                "&:hover": {
                  backgroundColor: Colors.white
                }
              }}
              onClick={onAddBtnClick}
            >
              <AddIcon />
            </Fab>
          </Box>
          <Box sx={{ height: "13rem", overflowY: "auto" }}>
            {inputList.map((e, index) => {
              return (
                <Box sx={{ display: "flex" }} key={e.id}>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          fontFamily: "Inria Sans",
                          fontSize: "1.3rem",
                          fontColor: Colors.primaryColor
                        }}
                      >
                        {e.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      <Box
                        sx={{ padding: "0.5rem" }}
                        onClick={() => {
                          onCloseBtnClick(e.id);
                        }}
                      >
                        <CloseIcon
                          sx={{
                            color: Colors.primaryColor,
                            height: "1.4rem"
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Box>
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
          onClick={onCheckBtnClick}
        >
          <DoneIcon />
        </Fab>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          padding: "1rem",
          marginBottom: "4rem"
        }}
      ></Box>
    </Box>
  );
};

export default AddSkills;
