import { List } from "@mui/material";
import React from "react";
import TodoItem from "./TodoItem";

function Todos() {
  return (
    <List sx={{ width: { xs: "100%", sm: "auto" } }}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </List>
  );
}

export default Todos;
