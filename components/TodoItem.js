import { Delete, Edit } from "@mui/icons-material";
import { Box, Checkbox, IconButton, ListItem, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/tasks/tasks-action";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const onDeleteTask = () => {
    dispatch(deleteTask(todo._id));
  };

  const onCompletedTask = (e) => {
    dispatch(
      updateTask({ id: todo._id, description: todo.description, completed: e.target.checked })
    );
  };

  const onChangeDescriptionTask = (e) => {
    const newDescription = prompt("Change the task", todo.description);

    dispatch(updateTask({ id: todo._id, description: newDescription, completed: todo.completed }));
  };

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
          <Checkbox checked={todo.completed} onChange={onCompletedTask} />
          <IconButton onClick={onDeleteTask}>
            <Delete />
          </IconButton>
          <IconButton onClick={onChangeDescriptionTask}>
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
