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
  }, []);

  return (
    <Document>
      {resumeData !== undefined ? (
        <Page size="A4">
          <View style={styles.section}>
            <Text>{resumeData.personal_info.firstName}</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
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
