// Performs any setup work for Apollo.
// This is in its own file to keep it nice and clean
import React from 'react';
import {
  ApolloProvider,
  ApolloClient
} from 'react-apollo';

export default function withApollo(component) {
  const client = new ApolloClient();
  return <ApolloProvider client={client}>
    {component}
  </ApolloProvider>;
};
