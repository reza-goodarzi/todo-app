/* eslint-disable react-hooks/exhaustive-deps */
import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";
import { getCurrentLoginUser } from "../store/user-actions";

export default function Home() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  useEffect(() => {
    if (state.user || !state.token) {
      return;
    }

    dispatch(getCurrentLoginUser(state.token));
  }, []);

  return (
    <Layout title="Todo App" desc="Manage your todo's">
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <NewTodo />
        <Todos />
      </Box>
    </Layout>
  );
}
