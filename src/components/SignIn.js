import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LoginIcon from "@mui/icons-material/Login";

function SignIn() {
  return (
    <Box>
      <Grid container style={{ display: "flex", padding: "6rem" }}>
        <Container
        maxWidth="xs"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{ textAlign: "center" }}
              sx={{m: 3}}
            >
              Sign in to your Account
            </Typography>
            <Box component="form" action="/" method="GET">
              <TextField
                label="Email Address"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
              <TextField
                label="Password"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
              <Button
                type="submit"
                color="secondary"
                size="md"
                variant="contained"
                fullWidth
                disableElevation
                endIcon={<LoginIcon />}
                sx={{ m: 1 }}
              >
                Sign In
              </Button>
              <Grid container spacing={1}>
                <Grid item xs={5}>
                </Grid>
                <Grid item xs={7}>
                  <a href="/SignUp">Don't have an account? Sign Up</a>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}

export default SignIn;
