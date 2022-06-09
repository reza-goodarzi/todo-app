import styled from "@emotion/styled";
import { AddCircle, AddTask } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

function NewTodo() {
  return (
    <FormStyle>
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
