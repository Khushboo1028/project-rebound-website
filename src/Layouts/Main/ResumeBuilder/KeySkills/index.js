import React, { useState } from "react";
import { Box, Grid, Icon, TextField, Fab, Button } from "@mui/material";
import { formBackground } from "../styles";
import { Colors } from "../../../../constants/Colors";
import AddIcon from "@mui/icons-material/Add";

const KeySkillBlock = () => {
  const [inputList, setInputList] = useState([""]);

  let skills_list = [
    "Microsoft Word",
    "Microsoft Powerpoint",
    "Drawing",
    "Art",
    "Programming",
    "Sociology",
    "Art",
    "Writing",
    "Reading",
    "Googling",
    "Communication",
    "Public Speaking",
    "Writing",
    "Reading",
    "Googling",
    "Communication",
    "Public Speaking"
  ];

  const onAddBtnClick = () => {
    setInputList(inputList.concat([""]));
  };

  const AddSkill = () => {
    return (
      <Box sx={{ height: "20rem", overflowY: "auto" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {inputList.map((e) => {
              return (
                <div style={{ display: "flex", width: "90%" }}>
                  <div style={{ width: "95%" }}>
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      sx={{ width: "100%", marginTop: "1rem" }}
                    />
                  </div>
                  <div style={{ width: "5%" }}>
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
                  </div>
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    );
  };

  const SuggestedSkills = () => {
    return (
      <Box
        sx={{
          backgroundColor: Colors.white,
          height: "18rem",
          overflowY: "auto",
          borderRadius: "1rem",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          margin: "auto",
          paddingBottom: "2rem",
          width: "100%",
          marginBottom: "2rem"
        }}
      >
        <Grid container spacing={2}>
          {/* Heading row */}
          <Grid item xs={12}>
            <Box
              sx={{
                fontWeight: "700",
                fontSize: { md: "1.5rem", sm: "0.8rem", xs: "0.8rem" },
                color: Colors.primaryColor,
                marginLeft: "1rem",
                textAlign: "left",
                marginTop: "1rem"
              }}
            >
              Add Some from this list if applicable
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
          {skills_list.map((e) => (
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  margin: "auto",
                  width: { md: "80%", sm: "50%", xs: "55%" }
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: Colors.primaryColor,
                    maxWidth: { md: "8rem", sm: "7rem", xs: "8rem" },
                    minWidth: { md: "8rem", sm: "7rem", xs: "8rem" },
                    minHeight: { md: "4rem", sm: "4rem", xs: "3rem" },
                    fontSize: { md: "0.8rem", sm: "0.7rem", xs: "0.5rem" },

                    "&:hover": { backgroundColor: Colors.primaryColor }
                  }}
                >
                  {e}
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
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
        width: "100%",
        marginBottom: "2rem"
      }}
    >
      <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
        {/* Heading row */}
        <Grid item xs={8}>
          <Box
            sx={{
              fontWeight: "700",
              fontSize: { md: "1.3rem", sm: "1rem", xs: "1.2rem" },
              color: Colors.primaryColor
            }}
          >
            Key Skills
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
            Refer to the skills listed by you above and add what you would like
            to be present in your resume. You may also add some skills from the
            right and add it to your list!
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

      <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
        <Grid item sm={6}>
          {/* Adding component here */}
          <AddSkill />
        </Grid>

        <Grid item sm={6} style={{ paddingRight: "1rem" }}>
          <SuggestedSkills />
        </Grid>
      </Grid>
    </Box>
  );
};

const KeySkills = () => {
  return (
    <div>
      <Box sx={formBackground}>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Box>
              <KeySkillBlock />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default KeySkills;
