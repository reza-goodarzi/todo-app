import styled from "@emotion/styled";
import { AddCircle, AddTask } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewTask } from "../store/tasks/tasks-action";

function NewTodo() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.tasks);

  const submitHandler = (e) => {
    e.preventDefault();

    // if (task.trim().length < 5) {
    //   return;
    // }
    dispatch(createNewTask(task));
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <Box
        item
        sx={{
          width: { xs: "100%", sm: 560 },
          padding: { xs: "64px 16px 32px", sm: "64px 0 32px" },
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          type="text"
          placeholder="Add Your Task"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton type="submit">
                  <AddTask />
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </Box>
    </FormStyle>
  );
}

export default NewTodo;

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
