import { AddCircle, AddTask } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

function NewTodo() {
  return (
    <form>
      <Box item sx={{ width: 400, p: 4 }}>
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
        />
      </Box>
    </form>
  );
}

export default NewTodo;
