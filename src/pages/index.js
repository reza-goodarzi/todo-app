/* eslint-disable react-hooks/exhaustive-deps */
import { Backdrop, Box, CircularProgress } from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";
import { TOKEN } from "../config";
import { getCurrentLoginUser } from "../store/user-actions";
import { userActions } from "../store/user-slice";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  const router = useRouter();

  useEffect(() => {
    // if (!localStorage.getItem(TOKEN)) {
    // backToLogin();
    // return;
    // }

    if (state.user || !state.token) {
      return;
    }

    dispatch(getCurrentLoginUser(state.token));
  }, []);

  // useEffect(() => {
  //   if (state.error) {
  //     backToLogin();
  //   }
  // }, [state.error]);

  // const backToLogin = () => {
  //   setLoading(true);
  //   router.push("/login");
  //   dispatch(userActions.getError(""));
  // };

  console.log(state);

  return (
    <>
      <Layout title="Todo App" desc="Manage your todo's">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <NewTodo />
          <Todos />
        </Box>
      </Layout>

      <Backdrop open={loading}>
        <CircularProgress size="32px" />
      </Backdrop>
    </>
  );
}
