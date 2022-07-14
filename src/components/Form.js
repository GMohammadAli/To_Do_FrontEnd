import React ,{ useContext, useState }from 'react'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon  from "@mui/icons-material/Add"
import Select from "react-select"
import { AuthContext } from '../context/AuthContext';
import { Login } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';


const options = [
  { value: "not-started", label: "Not Started" },
  { value: "in-progress", label: "In Progress" },
  { value: "complete", label: "Complete" },
];


function Form() {
  let navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState()
  const authContext = useContext(AuthContext)
  const taskContext = useContext(TaskContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      user_id: authContext.user.id
    }
    taskContext.addTask(values)
    navigate('/')
  }

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
        {authContext.isAuth ? (
          <Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{ textAlign: "center" }}
              sx={{ m: 3 }}
            >
              Create Tasks
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                label="Title"
                name="title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
              <TextField
                label="Description"
                name="description"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
              <Box sx={{ m: 1 }} className="Select">
                <Select
                  placeholder="Status"
                  name="status"
                  required
                  value={selectedOption}
                  options={options}
                  onClick={(value) => {
                    setSelectedOption(value);
                  }}
                />
              </Box>
              <Button
                type="submit"
                color="secondary"
                size="md"
                variant="contained"
                fullWidth
                disableElevation
                endIcon={<AddIcon />}
                sx={{ m: 1 }}
              >
                Add Tasks
              </Button>
            </Box>
          </Box>
        ) : (
          <Box>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              style={{ textAlign: "center" }}
              sx={{ m: 3 }}
            >
              Please Login First
            </Typography>
            <Button
              type="submit"
              color="secondary"
              size="md"
              variant="contained"
              fullWidth
              disableElevation
              sx={{ m: 1 }}
              onClick={() => navigate("/SignIn")}
              endIcon={<Login />}
            >
              Login
            </Button>
          </Box>
        )}
        </Container>
      </Grid>
    </Box>
  );
}

export default Form