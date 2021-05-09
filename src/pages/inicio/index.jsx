import Head from 'next/head';
import { signOut, useSession } from 'next-auth/client';

import Topbar from '@components/layout/Topbar';

export default function Inicio() {

  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Inicio</title>
      </Head>

      <Topbar pageTitle="Inicio" />

      {session && <button onClick={(e) => {e.preventDefault(); signOut()}}>Cerrar sesión</button>}
      
    </>
  );
}
