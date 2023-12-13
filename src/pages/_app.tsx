import { HubspotProvider } from '@aaronhayes/react-use-hubspot-form';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';

import { ThemeProvider } from 'contexts/ThemeProvider';
import { initializeApollo } from 'lib/client';

import 'assets/fonts/font-styles.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = initializeApollo(pageProps);

  return (
    <HubspotProvider>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </HubspotProvider>
  );
};

export default MyApp;
