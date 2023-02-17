import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Link,
  Typography,
  Container
} from "@mui/material";
import { Colors } from "../constants/Colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth, registerWithEmailAndPassword } from "../firebase/firebase";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { isEmailValid, isPasswordValid } from "../utils";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, loading] = useAuthState(auth);
  const [searchParams] = useSearchParams();
  const theme = createTheme();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) {
      if (searchParams.get("fromPath")) {
        navigate(searchParams.get("fromPath"));
      } else {
        navigate("/");
      }
    }
  }, [user, loading, navigate, searchParams]);

  const register = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      alert("Please enter all fields");
    } else if (password.length < 6 || !isPasswordValid(password)) {
      alert(
        "Password must contain at least one uppercase character, one lowercase character and one digit with minimum length of 6 digits"
      );
    } else if (!isEmailValid(email)) {
      alert("Please enter a valid email");
    } else {
      registerWithEmailAndPassword(firstName + " " + lastName, email, password);
    }
  };

  return (
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
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 3,
                    marginBottom: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: Colors.primaryColor }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Create an Account
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    // onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          id="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="new-password"
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, bgcolor: Colors.primaryColor }}
                      onClick={register}
                    >
                      Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                      <Grid item>
                        <Link
                          href="/login"
                          variant="body2"
                          sx={{ color: Colors.primaryColor }}
                        >
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Container>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SignUp;
