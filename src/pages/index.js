import Head from "next/head";
import Layout from "../components/Layout";
import NewTodo from "../components/NewTodo";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Manage your todo's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewTodo />
    </Layout>
  );
}
