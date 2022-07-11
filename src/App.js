import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  SignUp from "./components/SignUp"
import  SignIn from "./components/SignIn"
import  Form from "./components/Form"
import  Cards from "./components/Cards"
import  Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Cards />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/addTasks" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
