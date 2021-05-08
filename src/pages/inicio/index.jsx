import Head from "next/head";

import Topbar from "@components/common/Topbar";

export default function Inicio() {
  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>
      <Topbar pageTitle="Inicio" />
    </>
  );
}
