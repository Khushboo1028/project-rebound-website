import React, { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { useNavigate } from "react-router-dom";
import {
  Page,
  usePDF,
  Text,
  View,
  Document,
  StyleSheet
} from "@react-pdf/renderer";
import { Button, Box, Grid } from "@mui/material";
import { Colors } from "../constants/Colors";

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  name: {
    textAlign: "center",
    fontSize: "25"
  },
  desc: {
    textAlign: "center",
    fontSize: "11",
    paddingTop: 4
  },
  heading: {
    fontSize: "18",
    marginTop: "10"
  },
  summary: {
    textAlign: "left",
    fontSize: "11",
    paddingTop: 4
  },
  line: {
    marginTop: 3,
    height: 1,
    backgroundColor: "#808080"
  },
  viewContainer: {
    marginBottom: "10"
  },
  educationContainer: {
    display: "flex",
    flexDirection: "row"
  },
  title: {
    fontSize: "11",
    fontWeight: "bold",
    marginTop: 4
  },
  rightInfo: {
    marginLeft: "auto",
    fontWeight: "bold",
    fontSize: "11",
    marginTop: "-10"
  },

  subTitle: {
    fontSize: "10",
    marginTop: 4
  },
  lowerRightInfo: {
    marginLeft: "auto",
    fontSize: "10",
    marginTop: "-10"
  },
  description: {
    fontSize: "10",
    marginTop: "5",
    lineHeight: "1.5"
  },
  position: {
    fontSize: "10",
    marginTop: 1
  },
  skill: {
    fontSize: "10",
    marginTop: "4"
  }
});

const MyDoc = (data) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [resumeData] = useState(data);

  useEffect(() => {
    if (currentUser) {
      console.log("resume doc area ", data);
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  // const educationList = [
  //   {
  //     schoolName: "San Francisco State University",
  //     startDate: "Fall 2021",
  //     endDate: "Spring 2023",
  //     schoolLocation: "San Francisco, CA",
  //     degree: "MSc",
  //     fieldOfStudy: "Computer Science"
  //   },
  //   {
  //     schoolName: "San Francisco State University",
  //     startDate: "Fall 2021",
  //     endDate: "Spring 2023",
  //     schoolLocation: "San Francisco, CA",
  //     degree: "MSc",
  //     fieldOfStudy: "Computer Science"
  //   }
  // ];

  // const experience_list = [
  //   {
  //     position: "Accessible Media Student Developer",
  //     startDate: "Sep 2019",
  //     endDate: "June 2023",
  //     companyName: "San Francisco State University",
  //     description:
  //       "– Developed 8+ web pages (tabs) in caption management website using JavaScript (React.js, Redux, HTML, CSS)\n– Developed 10+ features and fixed bugs in the existing components\n– Fetched data using API calls and presented on the web page\n– Processed books using Accessible Technology like Adobe Accessibility features, Kurzweil, Abby Fine Reader"
  //   },
  //   {
  //     position: "Accessible Media Student Developer",
  //     startDate: "Sep 2019",
  //     endDate: "June 2023",
  //     companyName: "San Francisco State University",
  //     description:
  //       "– Developed 8+ web pages (tabs) in caption management website using JavaScript (React.js, Redux, HTML, CSS)\n– Developed 10+ features and fixed bugs in the existing components\n– Fetched data using API calls and presented on the web page\n– Processed books using Accessible Technology like Adobe Accessibility features, Kurzweil, Abby Fine Reader"
  //   }
  // ];

  // const skills = [
  //   "Web Development",
  //   "Mobile Development",
  //   "UI/UX",
  //   "Adobe Photoshop",
  //   "Adobe Illustrator",
  //   "Microsoft Suite"
  // ];

  return (
    <Document>
      {resumeData !== undefined ? (
        <Page size="A4">
          <View style={styles.section}>
            <Text style={styles.name}>
              {resumeData.personal_info.firstName +
                " " +
                resumeData.personal_info.lastName}
            </Text>
            <Text style={styles.desc}>
              {resumeData.personal_info.address +
                ", " +
                resumeData.personal_info.city +
                ", " +
                resumeData.personal_info.state +
                ", " +
                resumeData.personal_info.zipCode +
                " | " +
                resumeData.personal_info.email +
                " | " +
                resumeData.personal_info.phone}
            </Text>

            {/* //TODO: Check This empty thing is correct*/}
            {JSON.stringify(resumeData.objective) !== "{}" ? (
              <View>
                <Text style={styles.heading}>Objective</Text>
                <Text style={styles.line} />
                <Text style={styles.summary}>{resumeData.objective}</Text>
              </View>
            ) : (
              <Text></Text>
            )}

            <Text style={styles.heading}>Education</Text>
            <Text style={styles.line} />
            {resumeData.education_info.map((e, index) => {
              return (
                <View style={styles.viewContainer} key={index}>
                  <View styles={styles.educationContainer}>
                    <Text style={styles.title}>{e.schoolName}</Text>
                    <Text style={styles.rightInfo}>{e.schoolLocation}</Text>
                  </View>

                  <View styles={styles.educationContainer}>
                    <Text style={styles.subTitle}>
                      {e.degree + " " + e.fieldOfStudy}
                    </Text>
                    <Text style={styles.lowerRightInfo}>
                      {e.startDate + " - " + e.endDate}
                    </Text>
                  </View>
                </View>
              );
            })}

            {/* experience */}
            <Text style={styles.heading}>Experience</Text>
            <Text style={styles.line} />
            {resumeData.professional_experience_info.map((e, index) => {
              return (
                <View style={styles.viewContainer} key={index}>
                  <View styles={styles.educationContainer}>
                    <Text style={styles.title}>{e.companyName}</Text>
                    <Text style={styles.rightInfo}>
                      {e.startDate + " - " + e.endDate}
                    </Text>
                  </View>

                  <View styles={styles.educationContainer}>
                    <Text style={styles.position}>{e.position}</Text>
                    <Text style={styles.description}>{e.description}</Text>
                  </View>
                </View>
              );
            })}

            {/* Skills */}
            <Text style={styles.heading}>Skills</Text>
            <Text style={styles.line} />

            {resumeData.skills_info.map((e, index) => {
              return (
                <View key={index}>
                  <Text style={styles.skill}>{e}</Text>
                </View>
              );
            })}
          </View>
        </Page>
      ) : (
        <Page></Page>
      )}
    </Document>
  );
};

const PDFPage = ({ resumeData }) => {
  const [instance, updateInstance] = usePDF({ document: MyDoc(resumeData) });

  useEffect(() => {
    console.log("in pdf page ", resumeData);
    updateInstance(MyDoc);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Box
        sx={{
          margin: "auto",
          width: { md: "30%", sm: "30%", xs: "50%" },
          mt: 10,
          bgcolor: Colors.white,
          borderRadius: "0.5rem",
          boxShadow: 24,
          p: 4
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Button
              sx={{
                backgroundColor: Colors.primaryColor,
                margin: "auto",
                width: "90%",
                "&:hover": { backgroundColor: Colors.primaryColor }
              }}
            >
              <a
                href={instance.url}
                download="resume.pdf"
                style={{ textDecoration: "None", color: Colors.white }}
              >
                Download Resume
              </a>
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button
              sx={{
                margin: "auto",
                width: "90%",
                backgroundColor: Colors.primaryColor,
                "&:hover": { backgroundColor: Colors.primaryColor }
              }}
            >
              <a
                href={instance.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "None", color: Colors.white }}
              >
                View Resume
              </a>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default PDFPage;
