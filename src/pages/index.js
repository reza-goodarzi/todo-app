import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Manage your todo's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Home
    </Layout>
  );
}
