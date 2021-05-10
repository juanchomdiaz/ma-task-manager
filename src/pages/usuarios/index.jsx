import { getSession } from 'next-auth/client';

import usersService from '@services/users';

import Head from "next/head";

import Topbar from "@components/layout/Topbar";
import UsersMain from "@components/views/users/UsersMain";
import ErrorMessage from '@components/common/ErrorMessage/ErrorMessage';

export default function Usuarios({users, withError}) {
  return (
    <>
      <Head>
        <title>Usuarios</title>
      </Head>

      <Topbar pageTitle="Usuarios" />

      {withError ? <ErrorMessage /> : <UsersMain {...users} />}      
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const {users, withError} = await usersService.getUsers();

  if (!session) {
    context.res.writeHead(302, { Location: '/auth/iniciar-sesion' });
    context.res.end();
  } 

  return {
    props: {
      users,
      withError
    },
  };
}