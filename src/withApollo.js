// Performs any setup work for Apollo.
// This is in its own file to keep it nice and clean
import React from 'react';
import {
  ApolloProvider,
  ApolloClient
} from 'react-apollo';
import { MockedProvider } from 'react-apollo/lib/test-utils';
import mocks from './mocks';

const useMocks = process.env.NODE_ENV === 'development' || 'test';
export default function withApollo(component) {
  if (useMocks) {
    return <MockedProvider mocks={mocks}>
      {component}
    </MockedProvider>;
  }

  return <ApolloProvider client={new ApolloClient()}>
    {component}
  </ApolloProvider>;
};
