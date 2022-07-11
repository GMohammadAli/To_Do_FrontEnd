import { Card, CardContent, CardHeader, Container, IconButton, Typography } from '@mui/material';
import React from 'react'
import { DeleteOutlined } from "@mui/icons-material";

function Cards() {
  return (
    <div className="Card">
      <Container maxWidth="md" sx={{ m: 5 }}>
        <Card elevation={1}>
          <CardHeader
            //   avatar={
            //     <Avatar className={classes.avatar}>
            //       {note.category[0].toUpperCase()}
            //     </Avatar>
            //   }
            action={
              <IconButton
              // onClick={() => handleDelete(note.id)}
              >
                <DeleteOutlined />
              </IconButton>
            }
            //   title={note.title}
            //   subheader={note.category}
            title="Title"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {/* {note.details} */}
              Description
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default Cards