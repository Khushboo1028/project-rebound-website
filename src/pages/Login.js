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
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const theme = createTheme();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/home");
  }, [user, loading]);

  const onBtnPressed = (e) => {
    e.preventDefault();
    logInWithEmailAndPassword(email, password);
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
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 8
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: Colors.primaryColor }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box
                    component="form"
                    // onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, bgcolor: Colors.primaryColor }}
                      onClick={onBtnPressed}
                    >
                      Sign In
                    </Button>
                    <Grid container sx={{ marginTop: "1rem" }}>
                      <Grid item xs>
                        <Link
                          href="/forgotPassword"
                          variant="body2"
                          sx={{ color: Colors.primaryColor }}
                        >
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          href="/signUp"
                          variant="body2"
                          sx={{ color: Colors.primaryColor }}
                        >
                          {"Don't have an account? Sign Up"}
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

export default Login;
