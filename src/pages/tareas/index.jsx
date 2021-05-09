import Head from "next/head";

import Topbar from "@components/layout/Topbar";

export default function Tareas() {
  return (
    <>
      <Head>
        <title>Tareas</title>
      </Head>

      <Topbar pageTitle="Tareas" />
    </>
  );
}