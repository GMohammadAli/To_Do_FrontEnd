import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  SignUp from "./components/SignUp"
import  SignIn from "./components/SignIn"
import  Form from "./components/Form"
import  Cards from "./components/Cards"
import  Navbar from "./components/Navbar"
import UpdateForm from "./components/UpdateForm"
import AuthProvider from './context/AuthContext';
import TaskProvider from './context/TaskContext';
import { createMuiTheme, ThemeProvider } from "@mui/material";


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9c27b0",
      contrastText: "#383838",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TaskProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Cards />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/addTasks" element={<Form />} />
              <Route path="/updateTask" element={<UpdateForm />} />
            </Routes>
          </Router>
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
