import React ,{ useState }from 'react'
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


const options = [
  { value: "not-started", label: "Not Started" },
  { value: "in-progress", label: "In Progress" },
  { value: "complete", label: "Complete" },
];


function Form() {
  const [selectedOption, setSelectedOption] = useState();
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
              sx={{ m: 3 }}
            >
              Create Tasks
            </Typography>
            <Box component="form" action="/" method="POST">
              <TextField
                label="Title"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
              <TextField
                label="Description"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                sx={{ m: 1 }}
              />
              <Box sx={{ m: 1 }} className="Select">
                <Select
                  placeholder="Status"
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
        </Container>
      </Grid>
    </Box>
  );
}

export default Form