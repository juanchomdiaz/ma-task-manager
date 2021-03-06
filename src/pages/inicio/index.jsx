import Head from 'next/head';
import { useSession, getSession } from 'next-auth/client';

import Topbar from '@components/layout/Topbar';
import HomeMain from '@components/views/home/HomeMain';

export default function Inicio() {

  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>

      <Topbar pageTitle="Inicio" />
      <HomeMain />
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
