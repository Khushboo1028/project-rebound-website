import React, { useEffect, useState } from "react";
import { Box, Grid, Icon, TextField, Typography } from "@mui/material";
import { formBackground, inputStyleAutoComplete } from "../styles";
import { Colors } from "../../../../constants/Colors";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../../../../firebase/AuthContext";

// const SuggestedSkills = () => {
//   let skills_list = [
//     "Microsoft Word",
//     "Microsoft Powerpoint",
//     "Drawing",
//     "Art",
//     "Programming",
//     "Sociology",
//     "Art",
//     "Writing",
//     "Reading",
//     "Googling",
//     "Communication",
//     "Public Speaking",
//     "Writing",
//     "Reading",
//     "Googling",
//     "Communication",
//     "Public Speaking"
//   ];
//   return (
//     <Box
//       sx={{
//         backgroundColor: Colors.white,
//         height: "18rem",
//         overflowY: "auto",
//         borderRadius: "1rem",
//         boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//         margin: "auto",
//         paddingBottom: "2rem",
//         width: "100%",
//         marginBottom: "2rem"
//       }}
//     >
//       <Grid container spacing={2}>
//         {/* Heading row */}
//         <Grid item xs={12}>
//           <Box
//             sx={{
//               fontWeight: "700",
//               fontSize: { md: "1.5rem", sm: "0.8rem", xs: "0.8rem" },
//               color: Colors.primaryColor,
//               marginLeft: "1rem",
//               textAlign: "left",
//               marginTop: "1rem"
//             }}
//           >
//             Add Some from this list if applicable
//           </Box>
//         </Grid>
//       </Grid>
//       <Grid container spacing={2} sx={{ margin: "auto", width: "97%" }}>
//         {skills_list.map((e, index) => (
//           <Grid item md={4} sm={6} xs={12} key={index}>
//             <Box
//               sx={{
//                 margin: "auto",
//                 width: { md: "80%", sm: "50%", xs: "55%" }
//               }}
//             >
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: Colors.primaryColor,
//                   maxWidth: { md: "8rem", sm: "7rem", xs: "8rem" },
//                   minWidth: { md: "8rem", sm: "7rem", xs: "8rem" },
//                   minHeight: { md: "4rem", sm: "4rem", xs: "3rem" },
//                   fontSize: { md: "0.8rem", sm: "0.7rem", xs: "0.5rem" },

//                   "&:hover": { backgroundColor: Colors.primaryColor }
//                 }}
//               >
//                 {e}
//               </Button>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

const KeySkillBlock = ({ dataFromKeySkillsBlock, dataFromFirebase }) => {
  const [technicalSkillValue, setTechnicalSkillValue] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState([]);

  const [personalSkillValue, setPersonalSkillValue] = useState("");
  const [personalSkills, setPersonalSkills] = useState([]);

  const [otherSkillValue, setOtherSkillValue] = useState("");
  const [otherSkills, setOtherSkills] = useState([]);
  const [valueChanged, setValueChanged] = useState(0);

  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser !== null) {
      if (valueChanged < 1) {
        if (dataFromFirebase !== undefined) {
          const skillFirebase = dataFromFirebase.skills_info;

          if (skillFirebase !== undefined) {
            setOtherSkills(skillFirebase.otherSkills);
            setPersonalSkills(skillFirebase.personalSkills);
            setTechnicalSkills(skillFirebase.technicalSkills);
          }
        }
      }

      dataFromKeySkillsBlock({
        technicalSkills: technicalSkills,
        personalSkills: personalSkills,
        otherSkills: otherSkills
      });
    }

    // eslint-disable-next-line
  }, [technicalSkills, personalSkills, otherSkills, dataFromFirebase]);

  const onAddTechnicalSkillBtnClick = (e) => {
    setTechnicalSkills([...technicalSkills, technicalSkillValue]);
    setTechnicalSkillValue("");
    setValueChanged(valueChanged + 1);
  };

  const onRemoveTechnicalSkillBtnClick = (index) => {
    setTechnicalSkills(technicalSkills.filter((_, id) => id !== index));
    setValueChanged(valueChanged + 1);
  };

  const onAddPersonalSkillBtnClick = (e) => {
    setPersonalSkills([...personalSkills, personalSkillValue]);
    setPersonalSkillValue("");
    setValueChanged(valueChanged + 1);
  };

  const onRemovePersonalSkillBtnClick = (index) => {
    setPersonalSkills(personalSkills.filter((_, id) => id !== index));
    setValueChanged(valueChanged + 1);
  };

  const onAddOtherSkillBtnClick = (e) => {
    setOtherSkills([...otherSkills, otherSkillValue]);
    setOtherSkillValue("");
    setValueChanged(valueChanged + 1);
  };

  const onRemoveOtherSkillBtnClick = (index) => {
    setOtherSkills(otherSkills.filter((_, id) => id !== index));
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

      <Grid container spacing={2}>
        {/* Technical Skills Block */}
        <Grid item sm={4}>
          <Grid
            container
            spacing={2}
            sx={{
              margin: "auto",
              width: "97%"
            }}
          >
            <Grid item sm={12}>
              {/* Adding component here */}

              <TextField
                sx={inputStyleAutoComplete}
                label="Enter Technical Skills Here"
                variant="filled"
                value={technicalSkillValue}
                onChange={(e) => setTechnicalSkillValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    onAddTechnicalSkillBtnClick(e);
                  }
                }}
                focused
              />
            </Grid>

            <Grid
              item
              sm={12}
              sx={{
                margin: "auto",
                width: "100%",
                height: "20rem",
                overflowY: "auto"
              }}
            >
              {/* viewing skills component here */}
              {technicalSkills !== undefined ? (
                technicalSkills.map((e, index) => {
                  return (
                    <Box
                      sx={{ display: "flex", marginLeft: "0.4rem" }}
                      key={index}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <Typography
                            sx={{
                              fontFamily: "Inria Sans",
                              fontSize: "1.3rem",
                              fontColor: Colors.primaryColor
                            }}
                          >
                            {e}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Box
                            sx={{ padding: "0.5rem" }}
                            onClick={() => {
                              onRemoveTechnicalSkillBtnClick(index);
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
                })
              ) : (
                <Box></Box>
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* Personal Arrtributes Skills Block */}
        <Grid item sm={4}>
          <Grid
            container
            spacing={2}
            sx={{
              margin: "auto",
              width: "97%"
            }}
          >
            <Grid item sm={12}>
              {/* Adding component here */}

              <TextField
                sx={inputStyleAutoComplete}
                label="Enter Personal Attributes Here"
                variant="filled"
                value={personalSkillValue}
                onChange={(e) => setPersonalSkillValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    onAddPersonalSkillBtnClick(e);
                  }
                }}
                focused
              />
            </Grid>

            <Grid
              item
              sm={12}
              sx={{
                margin: "auto",
                width: "100%",
                height: "20rem",
                overflowY: "auto"
              }}
            >
              {/* viewing skills component here */}
              {personalSkills !== undefined ? (
                personalSkills.map((e, index) => {
                  return (
                    <Box
                      sx={{ display: "flex", marginLeft: "0.4rem" }}
                      key={index}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <Typography
                            sx={{
                              fontFamily: "Inria Sans",
                              fontSize: "1.3rem",
                              fontColor: Colors.primaryColor
                            }}
                          >
                            {e}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Box
                            sx={{ padding: "0.5rem" }}
                            onClick={() => {
                              onRemovePersonalSkillBtnClick(index);
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
                })
              ) : (
                <Box></Box>
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* Other Skills Block */}
        <Grid item sm={4}>
          <Grid
            container
            spacing={2}
            sx={{
              margin: "auto",
              width: "97%"
            }}
          >
            <Grid item sm={12}>
              {/* Adding component here */}

              <TextField
                sx={inputStyleAutoComplete}
                label="Enter Other Skills Here"
                variant="filled"
                value={otherSkillValue}
                onChange={(e) => setOtherSkillValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    onAddOtherSkillBtnClick(e);
                  }
                }}
                focused
              />
            </Grid>

            <Grid
              item
              sm={12}
              sx={{
                margin: "auto",
                width: "100%",
                height: "20rem",
                overflowY: "auto"
              }}
            >
              {/* viewing skills component here */}
              {otherSkills !== undefined ? (
                otherSkills.map((e, index) => {
                  return (
                    <Box
                      sx={{ display: "flex", marginLeft: "0.4rem" }}
                      key={index}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={10}>
                          <Typography
                            sx={{
                              fontFamily: "Inria Sans",
                              fontSize: "1.3rem",
                              fontColor: Colors.primaryColor
                            }}
                          >
                            {e}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Box
                            sx={{ padding: "0.5rem" }}
                            onClick={() => {
                              onRemoveOtherSkillBtnClick(index);
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
                })
              ) : (
                <Box></Box>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const KeySkills = (props) => {
  //getting data from key skills block to key skills component
  const [keySkillsBlockData, setKeySkillsBlockData] = useState();

  const dataFromKeySkillsBlock = (keySkillsBlockData) => {
    setKeySkillsBlockData(keySkillsBlockData);
  };

  useEffect(() => {
    props.dataFromSkillsInfo(keySkillsBlockData);
  }, [keySkillsBlockData, props]);

  return (
    <div>
      <Box sx={formBackground}>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <Box>
              <KeySkillBlock
                dataFromKeySkillsBlock={dataFromKeySkillsBlock}
                dataFromFirebase={props.dataFromFirebase}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default KeySkills;
