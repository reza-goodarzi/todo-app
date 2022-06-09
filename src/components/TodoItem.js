import { Delete, Edit } from "@mui/icons-material";
import { Box, Checkbox, IconButton, ListItem, Paper, Typography } from "@mui/material";
import React from "react";

function TodoItem({ todo }) {
  return (
    <ListItem
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          p: 1.5,
          alignItems: "center",
          width: { xs: "100%", sm: 560 },
          justifyContent: "space-between",
        }}
        elevation={1}
      >
        <Typography
          sx={
            todo.completed ? { textDecoration: "line-through  #28aa6c", color: "primary.main" } : {}
          }
        >
          {todo.description}
        </Typography>
        <Box>
          <Checkbox checked={todo.completed} />
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Edit />
          </IconButton>
        </Box>
      </Paper>
      <Typography sx={{ color: "gray", fontSize: "small", mt: 0.5, ml: 0.5 }}>
        Last update: {new Date(todo.updatedAt).toLocaleString()}
      </Typography>
    </ListItem>
  );
}

export default TodoItem;
