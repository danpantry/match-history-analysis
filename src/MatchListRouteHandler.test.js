import React from 'react';
import MatchListRouteHandler from './MatchListRouteHandler';
import { shallow } from 'enzyme';
import MatchListPage from './MatchListPage';

it('renders the MatchListPage component', () => {
  const component = shallow(<MatchListRouteHandler />);

  expect(component.find(MatchListPage).exists()).toBe(true);
});
