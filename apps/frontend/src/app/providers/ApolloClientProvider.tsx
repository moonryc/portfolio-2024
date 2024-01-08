import React, { PropsWithChildren } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//TODO set up the uri link with an env variable
const apolloClient = new ApolloClient({
  uri: "PLACEHOLDER",
  cache: new InMemoryCache(),
})


type ApolloClientProviderProps = PropsWithChildren<{}>

const ApolloClientProvider = ({children}:ApolloClientProviderProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      {children}
    </ApolloProvider>
  );
};

export default ApolloClientProvider;
