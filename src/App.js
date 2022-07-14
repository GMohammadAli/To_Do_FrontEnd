import './App.css';
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

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
