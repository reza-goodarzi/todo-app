import { Box } from "@mui/material";
import Head from "next/head";
import Layout from "../components/Layout";
import NewTodo from "../components/NewTodo";
import Todos from "../components/Todos";

export default function Home() {
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
