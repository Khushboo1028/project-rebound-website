import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Icon,
  Autocomplete,
  TextField,
  Typography
} from "@mui/material";
import { formBackground, inputStyleAutoComplete } from "../styles";
import { Colors } from "../../../../constants/Colors";
import {
  technicalSkills
  // occupations,
  // verbalSkills,
  // greenSkills,
  // traversalSkills
} from "./autocompleteSkills";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { width } from "@mui/system";

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

const KeySkillBlock = (props) => {
  const [autoCompleteValue, setAutoCompleteValue] = useState("");
  const [selectedSkillsList, setSelectedSkillsList] = useState([]);
  const [autoCompleteObjectSkills, setAutoCompleteObjectSkills] = useState([]);
  const [skills, setSkills] = useState([]);
  //can put all lists in one list instead of separating it out to avoid warnings
  // const autoCompleteSkills = [
  //   ...technicalSkills,
  //   ...occupations,
  //   ...verbalSkills,
  //   ...greenSkills,
  //   ...traversalSkills
  // ];

  // const autoCompleteSkills = ["skill 1", "skill 2", "skill 3"];

  // useEffect(() => {
  //   // eslint-disable-next-line

  //   autoCompleteSkills.map((skill, index) => {
  //     if (autoCompleteObjectSkills.length < autoCompleteSkills.length) {
  //       autoCompleteObjectSkills.push({ id: index, label: skill });
  //     }

  //     console.log("here");
  //   });
  // }, [autoCompleteObjectSkills]);

  const onAddBtnClick = (e) => {
    setSkills([...skills, autoCompleteValue]);
    setAutoCompleteValue("");
    props.dataFromKeySkillsBlock(skills);
  };

  const onRemoveBtnClick = (index) => {
    setSkills(skills.filter((_, id) => id !== index));
    props.dataFromKeySkillsBlock(skills);
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
        <Grid item sm={12}>
          {/* Adding component here */}
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={autoCompleteObjectSkills}
            autoComplete
            onChange={(e) => handleOnChange(e)}
            renderInput={(e) => (
              <TextField
                {...e}
                label="Skills"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    // onAddBtnClick();
                  }
                }}
              />
            )}
          /> */}

          {/* <ReactSearchAutocomplete
            items={autoCompleteObjectSkills}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            // autoFocus
          /> */}

          <TextField
            sx={inputStyleAutoComplete}
            label="Enter Skills Here"
            variant="filled"
            value={autoCompleteValue}
            onChange={(e) => setAutoCompleteValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                onAddBtnClick();
              }
            }}
            focused
          />
        </Grid>

        <Grid item sm={12} sx={{ margin: "auto", width: "100%" }}>
          {/* Adding component here */}
          {skills.map((e, index) => {
            return (
              <Box sx={{ display: "flex", marginLeft: "0.4rem" }} key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={11}>
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
                  <Grid item xs={1}>
                    <Box
                      sx={{ padding: "0.5rem" }}
                      onClick={() => {
                        onRemoveBtnClick(index);
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
        </Grid>

        <Grid item sm={4} sx={{ margin: "auto", width: "100%" }}></Grid>
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
              <KeySkillBlock dataFromKeySkillsBlock={dataFromKeySkillsBlock} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default KeySkills;
