import React from 'react';
import { mount } from 'enzyme';
import { graphql, gql } from 'react-apollo';
import { addTypenameToDocument } from 'apollo-client';
import { MockedProvider } from 'react-apollo/lib/test-utils';

it('works with apollo correctly', (done) => {
  const mockedData = {
    user: {
      name: 'test',
      __typename: 'User'
    }
  };

  class TestComponent extends React.Component {
    componentWillReceiveProps(props) {
      expect(props.data.user.name).toEqual(mockedData.user.name);
      done();
    }
    render() {
      return null;
    }
  };

  const query = addTypenameToDocument(gql`query people { user { name } }`);
  const mocks = [
    {
      request: { query },
      result: {
        data: mockedData
      }
    }
  ];

  const TestContainer = graphql(query)(TestComponent);

  mount(<MockedProvider mocks={mocks}>
    <TestContainer />
  </MockedProvider>);
});
