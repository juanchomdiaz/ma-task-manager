import { Provider } from 'next-auth/client';

import Head from 'next/head';

import AppLayout from '@components/layout/AppLayout';

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

      <Provider options={{}} session={pageProps.session}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Provider>
    </>
  );
}

export default MyApp;
