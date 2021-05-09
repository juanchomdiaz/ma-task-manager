import Head from "next/head";

import Topbar from "@components/layout/Topbar";

export default function Usuarios() {
  return (
    <>
      <Head>
        <title>Usuarios</title>
      </Head>

      <Topbar pageTitle="Usuarios" />
    </>
  );
}