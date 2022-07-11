import React from 'react'
import { 
    AppBar ,  
    Button, 
    IconButton, 
    Stack, 
    Toolbar, 
    Typography 
} from "@mui/material"
import { Login } from "@mui/icons-material"
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { useNavigate } from "react-router-dom"

function Navbar() {
  let navigate = useNavigate();
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit">
          <DensityMediumIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Management App
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => navigate("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => navigate("/addTasks")} color="inherit">
            Add Tasks
          </Button>
          <Button
            onClick={() => navigate("/SignIn")}
            color="inherit"
            endIcon={<Login />}
          >
            {" "}
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar