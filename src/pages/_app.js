import { Provider } from 'next-auth/client';

import Head from 'next/head';

import TasksState from '@context/tasks/TasksState';

import AppLayout from '@components/layout/AppLayout';
import SessionTimeout from '@components/common/SessionTimeout/SessionTimeout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Provider session={pageProps.session}>
        <TasksState>
          <AppLayout>
            <SessionTimeout />
            <Component {...pageProps} />
          </AppLayout>
        </TasksState>
      </Provider>
    </>
  );
}

export default MyApp;
