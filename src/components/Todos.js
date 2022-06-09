/* eslint-disable react-hooks/exhaustive-deps */
import { List, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../store/tasks/tasks-action";
import TodoItem from "./TodoItem";
import { useRouter } from "next/router";

function Todos() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.tasks);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    return () => {
      if (!token) {
        return;
      }

      dispatch(getAllTasks(token));
    };
  }, [token]);

  console.log(items);

  return (
    <List sx={{ width: { xs: "100%", sm: "auto" } }}>
      {items ? (
        items.map((item) => <TodoItem key={item._id} todo={item} />)
      ) : (
        <Typography color="warning">There is no tasks!</Typography>
      )}
    </List>
  );
}

export default Todos;
