import { getSession } from 'next-auth/client';

import Head from "next/head";

import Topbar from "@components/layout/Topbar";

export default function Configuracion() {
  return (
    <>
      <Head>
        <title>Configuracion</title>
      </Head>

      <Topbar pageTitle="Configuracion" />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    context.res.writeHead(302, { Location: '/auth/iniciar-sesion' });
    context.res.end();
  }

  return {
    props: {},
  };
}