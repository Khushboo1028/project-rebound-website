import React, { useEffect, useState } from "react";
import { useAuth } from "../firebase/AuthContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Page,
  usePDF,
  Text,
  View,
  Document,
  StyleSheet
} from "@react-pdf/renderer";
import { Button } from "@mui/material";

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

const MyDoc = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [resumeData, setResumeData] = useState();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (currentUser) {
      if (!searchParams.get("resumeData")) {
        navigate("/");
      } else {
        let data = JSON.parse(searchParams.get("resumeData"));
        setResumeData(data);
        console.log(data);
      }
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const educationList = [
    {
      schoolName: "San Francisco State University",
      startDate: "Fall 2021",
      endDate: "Spring 2023",
      schoolLocation: "San Francisco, CA",
      degree: "MSc",
      fieldOfStudy: "Computer Science"
    },
    {
      schoolName: "San Francisco State University",
      startDate: "Fall 2021",
      endDate: "Spring 2023",
      schoolLocation: "San Francisco, CA",
      degree: "MSc",
      fieldOfStudy: "Computer Science"
    }
  ];

  const experience_list = [
    {
      position: "Accessible Media Student Developer",
      startDate: "Sep 2019",
      endDate: "June 2023",
      companyName: "San Francisco State University",
      description:
        "– Developed 8+ web pages (tabs) in caption management website using JavaScript (React.js, Redux, HTML, CSS)\n– Developed 10+ features and fixed bugs in the existing components\n– Fetched data using API calls and presented on the web page\n– Processed books using Accessible Technology like Adobe Accessibility features, Kurzweil, Abby Fine Reader"
    },
    {
      position: "Accessible Media Student Developer",
      startDate: "Sep 2019",
      endDate: "June 2023",
      companyName: "San Francisco State University",
      description:
        "– Developed 8+ web pages (tabs) in caption management website using JavaScript (React.js, Redux, HTML, CSS)\n– Developed 10+ features and fixed bugs in the existing components\n– Fetched data using API calls and presented on the web page\n– Processed books using Accessible Technology like Adobe Accessibility features, Kurzweil, Abby Fine Reader"
    }
  ];

  const skills = [
    "Web Development",
    "Mobile Development",
    "UI/UX",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Microsoft Suite"
  ];

  return (
    <Document>
      {resumeData !== undefined ? (
        <Page size="A4">
          <View style={styles.section}>
            <Text style={styles.name}>Khushboo Gandhi</Text>
            <Text style={styles.desc}>
              50 Chumasero Dr, San Francisco, CA 94132 | kgandhi1@mail.sfsu.edu
              | 4153162467
            </Text>
            <Text style={styles.heading}>Objective</Text>
            <Text style={styles.line} />
            <Text style={styles.summary}>
              Computer Science graduate student with experience in web and
              mobile application development with a thorough understanding of
              object oriented programming. Delivery-driven, committed to problem
              solving with expertise in JavaScript, Java and Python. Looking for
              a full time role in a software engineering position.
            </Text>
            <Text style={styles.heading}>Education</Text>
            <Text style={styles.line} />
            {educationList.map((e, index) => {
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
            {experience_list.map((e, index) => {
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

            {skills.map((e, index) => {
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

const TestPage = () => {
  const [instance, updateInstance] = usePDF({ document: MyDoc() });
  const [download, setDownload] = useState(false);

  const clickPdf = () => {
    updateInstance(MyDoc);
    setDownload(true);
  };

  return (
    <div>
      {download ? (
        <Button>
          <a href={instance.url} download="resume.pdf">
            Download Resume
          </a>
        </Button>
      ) : (
        <Button onClick={clickPdf}>Click to Load</Button>
      )}
    </div>
  );
};

export default TestPage;
