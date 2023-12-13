import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';
import merge from 'deepmerge';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';

import type { NormalizedCacheObject } from '@apollo/client';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const accessToken = process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN;
const isProduction = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

const prevheaders = {
  authorization: `Bearer ${accessToken}`,
  'X-Include-Drafts': 'true',
  'X-Exclude-Invalid': 'true',
};

const prodHeaders = {
  authorization: `Bearer ${accessToken}`,
  'X-Exclude-Invalid': 'true',
};

export const headers = isProduction ? prodHeaders : prevheaders;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.warn(`[GraphQL error]: Message: ${message}`, 'Location:', locations, 'Path:', path);
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

const batchHttpLink = () =>
  new BatchHttpLink({
    uri: 'https://graphql.datocms.com',
    credentials: 'same-origin',
    headers,
    batchInterval: 100,
    batchDebounce: true,
  });

const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => {
      const retryError = !!error;
      if (retryError && error.statusCode === 429) {
        const delay = error.response.headers.get('Retry-After');
        if (delay) {
          return new Promise(resolve => setTimeout(resolve, delay * 1000));
        }
      }

      return retryError;
    },
  },
});

const createApolloClient = () =>
  new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([retryLink, errorLink, batchHttpLink()]),
    cache: new InMemoryCache(),
  });

export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(existingCache, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') {
    return _apolloClient;
  }

  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export const addApolloState = (
  _client: { cache: { extract: () => any } },
  pageProps: { props: { [x: string]: any }; revalidate: number },
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = _client.cache.extract();
  }

  return pageProps;
};

export const useApollo = (pageProps: { [x: string]: any }) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(), [state]);

  return store;
};
