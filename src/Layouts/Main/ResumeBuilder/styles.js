import { Colors } from "../../../constants/Colors";

export const inputStyle = {
  input: {
    color: Colors.primaryColor,
    backgroundColor: Colors.white,
    fontFamily: "Inria Sans",
    fontSize: "1rem"
  },
  label: {
    Color: Colors.primaryColor,
    fontFamily: "Inria Sans",
    fontSize: "1.2rem"
  },
  color: Colors.primaryColor,
  ".css-o943dk-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    color: Colors.primaryColor,
    fontWeight: 700
  },
  ".css-1ff8729-MuiInputBase-root-MuiFilledInput-root:before": {
    borderBottom: "0"
  },
  ".css-1ff8729-MuiInputBase-root-MuiFilledInput-root:after": {
    borderBottom: "0"
  },
  ".MuiBox-root css-1otw7zh": { background: Colors.white },
  ".css-85zwa9-MuiInputBase-root-MuiFilledInput-root:hover": {
    backgroundColor: Colors.white,
    color: Colors.primaryColor
  },
  ".css-o943dk-MuiFormLabel-root-MuiInputLabel-root": {
    color: Colors.primaryColor,
    fontWeight: 700,
    backgroundColor: Colors.white
  },
  "&.Mui-checked": {
    color: Colors.primaryColor
  }
};

export const multiLineInputStyle = {
  backgroundColor: "#fff",
  border: "None",
  label: {
    color: Colors.primaryColor,
    fontWeight: "700",
    fontSize: "0.9rem",
    marginTop: "-0.7rem",
    paddingLeft: "0.6rem"
  },
  ".css-66dh3a-MuiInputBase-input-MuiInput-input": {
    padding: "0.5rem",
    fontFamily: "Inria Sans",
    color: Colors.primaryColor
  },
  ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
    fontSize: "1.2rem!important",
    color: Colors.primaryColor,
    fontFamily: "Inria Sans",
    marginTop: "0.2rem"
  }
};

export const btnClickStyle = {
  margin: "auto",
  width: "93%",
  fontFamily: "Inria Sans",
  color: Colors.primaryColor,
  fontWeight: "700",
  fontSize: "1rem"
};

export const formBackground = {
  height: "auto",
  borderRadius: "1rem",
  margin: "auto",

  width: "90%"
};
