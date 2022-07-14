import { Avatar, ButtonGroup, Card, CardContent, CardHeader, Container, IconButton, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { DeleteOutlined, EditOutlined } from "@mui/icons-material";
import { TaskContext } from '../context/TaskContext';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Cards() {
  let navigate = useNavigate()
  const taskContext =  useContext(TaskContext)
  const authContext = useContext(AuthContext)
  useEffect(() => {
    if (!authContext.isAuth) {
      navigate("/SignIn");
    }
  }, [])

  return (
    <div className="Card">
      <Container maxWidth="md" sx={{ m: 5 }}>
        {taskContext.tasks.map((task) => (
          <Card elevation={1} sx={{ m: 2 }}>
            <CardHeader
              avatar={<Avatar>{task.id}</Avatar>}
              action={
                <ButtonGroup>
                  <IconButton onClick={() => taskContext.deleteTask(task)}>
                    <DeleteOutlined />
                  </IconButton>
                  <IconButton onClick={() => {
                    taskContext.task = {
                      id:task.id,
                      title:task.title,
                      description:task.description,
                      status:task.status
                    }
                    navigate('/updateTask')}}>
                    <EditOutlined />
                  </IconButton>
                </ButtonGroup>
              }
              title={task.title}
              subheader={task.status}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {task.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Cards