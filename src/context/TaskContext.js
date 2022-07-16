import { createContext, useContext, useEffect, useState } from "react";
import React from 'react'
import { AuthContext } from "./AuthContext";
import axios from "axios";

const TaskContext = createContext()

function TaskProvider({children}) {
  const authContext = useContext(AuthContext);
  const [task , setTask] = useState({})
  const [tasks , setTasks] = useState([])
  const headers = {
    "Authorization": authContext.token,
    "Content-Type": "application/json",
  };

  useEffect(()=> {
    if(authContext.isAuth){
     getTasks()
    }
  },[authContext.isAuth])

  const getTasks = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/users/${authContext.user.id}/tasks`,
        { headers }
      )
      .then((response) => {
        const tasks = response.data
        setTasks(tasks.map((task)=> {
          return (task = {
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status
          });
        }))
      })
      .catch(err => {
        console.log("Error Occured")
        console.log(err)
      })
  }


  const addTask = async (task) => {
    await axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/users/${authContext.user.id}/tasks`,
        task,
        headers
      )
      .then((response) => {
        setTasks((tasks) => [
          ...tasks,
          {
            id: response.data.id,
            title: response.data.title,
            description: response.data.description,
            status: response.data.status,
          }
        ]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTask = async (taskToBeUpdated,id) => {
    await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}/users/${authContext.user.id}/tasks/${id}`,
      taskToBeUpdated,
      { headers }
    )
    .then(() => {
      getTasks()
    })
    .catch(err => {
        console.log(err)
    })
  }

  const deleteTask = async (taskToBeDeleted) => {
    await axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/users/${authContext.user.id}/tasks/${taskToBeDeleted.id}`,
        { headers }
      )
      .then(() => {
        setTasks(
          tasks.filter((task) => {
            return task.id !== taskToBeDeleted.id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <TaskContext.Provider
      value={{
        task:task,
        tasks: tasks,
        getTasks: getTasks,
        addTask: addTask,
        deleteTask: deleteTask,
        updateTask: updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider
export {TaskContext}