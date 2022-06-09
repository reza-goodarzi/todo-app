import { Box } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";
import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";
import { parseCookies } from "../helper";
import { API_URL, TOKEN } from "../config";

export default function Home() {
  useEffect(() => {
    return () => {
      fetch(`${API_URL}/users/me`, {
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    };
  });

  return (
    <Layout>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Manage your todo's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <NewTodo />
        <Todos />
      </Box>
    </Layout>
  );
}
