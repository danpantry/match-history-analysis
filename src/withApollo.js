// Performs any setup work for Apollo.
// This is in its own file to keep it nice and clean
import React from 'react';
import {
  ApolloProvider,
  ApolloClient
} from 'react-apollo';

const useMocks = process.env.NODE_ENV === 'development' || 'test';

export default function withApollo(component) {
  if (useMocks) {
    console.info('[apollo]', 'using mocks');
    const { MockedProvider } = require('react-apollo/lib/test-utils');
    const mocks = require('./mocks').default;
    return <MockedProvider mocks={mocks}>
      {component}
    </MockedProvider>;
  }

  return <ApolloProvider client={new ApolloClient()}>
    {component}
  </ApolloProvider>;
};
