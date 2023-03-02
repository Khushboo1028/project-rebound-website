import React, { useEffect } from "react";
import { useAuth } from "../firebase/AuthContext";
import {
  createSearchParams,
  useNavigate,
  useSearchParams
} from "react-router-dom";
import {
  Box,
  Grid,
  CssBaseline,
  TextField,
  Container,
  Link,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Colors } from "../constants/Colors";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

const UserInformation = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!currentUser) {
      navigate({
        pathname: "/login",
        search: createSearchParams({
          fromPath: "/userInformation"
        }).toString()
      });
    }
  }, [currentUser, navigate]);

  const btnContinuePressed = () => {
    if (searchParams.get("fromPath")) {
      navigate(searchParams.get("fromPath"));
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "5rem" }}>
        <Box
          sx={{
            backgroundColor: Colors.backgroundColor,
            height: "89%",
            margin: "auto",
            width: "50%",
            borderRadius: "1rem",
            padding: "1rem",
            boxShadow: 2,
            position: "relative"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 8
                  }}
                >
                  <Typography component="h1" variant="h5">
                    Help Us Help You!
                  </Typography>
                  <Typography component="p" variant="p">
                    This information will help us cater the website to your
                    device preferences and comfort level.
                  </Typography>
                  <Box
                    component="form"
                    // onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <FormControl fullWidth sx={{ marginTop: "2rem" }}>
                      <InputLabel id="demo-simple-select-label">
                        What OS do you use?
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Your comfort level with technology"
                        //   onChange={handleChange}
                      >
                        <MenuItem value={10}>Mac</MenuItem>
                        <MenuItem value={20}>Windows</MenuItem>
                        <MenuItem value={30}>Linux</MenuItem>
                      </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: "2rem" }}>
                      <InputLabel id="demo-simple-select-label">
                        Your comfort level with technology
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Your comfort level with technology"
                        //   onChange={handleChange}
                      >
                        <MenuItem value={10}>None</MenuItem>
                        <MenuItem value={15}>Low</MenuItem>
                        <MenuItem value={20}>Medium</MenuItem>
                        <MenuItem value={30}>High</MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={btnContinuePressed}
                      sx={{ mt: 3, mb: 2, bgcolor: Colors.primaryColor }}
                    >
                      Continue
                    </Button>
                    <Grid container sx={{ marginTop: "1rem" }}>
                      <Grid item xs></Grid>
                      <Grid item>
                        <Link
                          // href="/signUp"
                          variant="body2"
                          sx={{ color: Colors.primaryColor }}
                          onClick={() => {
                            navigate({
                              pathname: "/signup",
                              search: createSearchParams({
                                fromPath: searchParams.get("fromPath")
                              }).toString()
                            });
                          }}
                        >
                          {"Skip: I don't want personalised recommendation"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default UserInformation;