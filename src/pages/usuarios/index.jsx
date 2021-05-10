import { getSession } from 'next-auth/client';

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