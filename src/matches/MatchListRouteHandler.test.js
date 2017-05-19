import React from 'react';
import MatchListRouteHandler from './MatchListRouteHandler';
import { shallow } from 'enzyme';
import MatchListPage from './MatchListPage';
import { matchesFactory } from './factories';

it('renders the MatchListPage component when matches are provided', () => {
  const matches = matchesFactory(10);
  const component = shallow(<MatchListRouteHandler data={{ matches }} />);

  expect(component.find(MatchListPage).prop('matches')).toBe(matches);
});

it('should show a Loading message when data is loading', () => {
  const component = shallow(<MatchListRouteHandler data={{ loading: true }} />);

  expect(component.text()).toBe('Loading...');
});


it('should show an Error message when data failed to fetch', () => {
  const component = shallow(<MatchListRouteHandler data={{ error: new Error('crap') }} />);

  expect(component.text()).toBe('Error!');
});
