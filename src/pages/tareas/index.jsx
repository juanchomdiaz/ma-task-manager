import { getSession } from 'next-auth/client';

import Head from "next/head";

import Topbar from "@components/layout/Topbar";
import TasksMain from '@components/views/tasks/TasksMain';

export default function Tareas() {
  return (
    <>
      <Head>
        <title>Tareas</title>
      </Head>

      <Topbar pageTitle="Tareas" />
      <TasksMain />
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