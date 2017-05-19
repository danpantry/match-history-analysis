import React from 'react';
import ReactDOM from 'react-dom';
import MatchList from './MatchList';
import MatchListPage from './MatchListPage';
import Pager from './Pager';
import { shallow, mount } from 'enzyme';
import { matchesFactory } from './factories';

it('should render all matches if no perPage parameter is set', () => {
  const matches = matchesFactory(1);
  const component = shallow(<MatchList matches={matches} />);
  const page = component.children(MatchListPage);
  expect(page.prop('matches').length).toBe(matches.length);
});

it('should render, at maximum, the number of matches specified in perPage at one time', () => {
  const matches = matchesFactory(20);
  const maxMatches = 10;
  const component = shallow(<MatchList matches={matches} perPage={maxMatches} />);
  const page = component.children(MatchListPage);
  expect(page.prop('matches').length).toBe(maxMatches);
});

it('should render a pager with the correct `pages` prop', () => {
  const matches = matchesFactory(1);
  const component = shallow(<MatchList matches={matches} perPage={1} initialPage={1} />);
  const pager = component.find(Pager);
  expect(pager.prop('pages')).toBe(1);
});

it('should render a pager with the correct `currentPage` prop', () => {
  const matches = matchesFactory(1);
  const component = shallow(<MatchList matches={matches} perPage={1} initialPage={1} />);
  const pager = component.find(Pager);
  expect(pager.prop('currentPage')).toBe(1);
});

it('should display the first element on the first page', () => {
  const matches = matchesFactory(2);
  const component = shallow(<MatchList matches={matches} perPage={1} />);
  const firstMatch = matches[0];
  const page = component.children(MatchListPage);
  expect(page.prop('matches')).toEqual([ firstMatch ]);
});

it('should display the second element on the second page', () => {
  const matches = matchesFactory(2);
  const component = shallow(<MatchList matches={matches} perPage={1} initialPage={2} />);
  const secondMatch = matches[1];
  const page = component.children(MatchListPage);
  expect(page.prop('matches')).toEqual([ secondMatch ]);
});
