import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";

function SignUp() {
  return (
    <Box>
      <Grid container style={{ display: "flex", padding: "5rem" }}>
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
            >
              Create an Account
            </Typography>
            <Box component="form" action="/" method="POST">
              <TextField
                label="User Name"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
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
              <TextField
                label="Confirm Password"
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
                endIcon={<LockOpenIcon />}
                sx={{ m: 1 }}
              >
                REGISTER
              </Button>
              <Grid container>
                <Grid item xs={5}></Grid>
                <Grid item xs={7}>
                  <a href="/SignIn">Already have an account?Sign In</a>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Grid>
    </Box>
  );
}

export default SignUp;
