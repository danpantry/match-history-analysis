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

it('should correctly round up the number of pages if there are matches remaining after dividing matches by `perPage` prop', () => {
  // in other words, if we have 7 matches and we only want 5 per page, we should still display two pages in the Pager.
  const matches = matchesFactory(7);
  const component = shallow(<MatchList matches={matches} perPage={5} />);
  const pager = component.find(Pager);
  expect(pager.prop('pages')).toBe(2);
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

/// The following are technically integration tests.
it('should display the next page when I click the Next button', () => {
  const matches = matchesFactory(2);
  const component = mount(<MatchList matches={matches} perPage={1} />);
  const nextButton = component.find('button');
  nextButton.simulate('click');
  expect(component.state('page')).toBe(2);
});

it('should show the Next button as being enabled when there are more pages', () => {
  const matches = matchesFactory(2);
  const component = mount(<MatchList matches={matches} perPage={1} />);
  const nextButton = component.find('button');
  expect(nextButton.prop('disabled')).toBe(false);
});

it('should show the Next button as being disabled when there are no more pages', () => {
  const matches = matchesFactory(1);
  const component = mount(<MatchList matches={matches} perPage={1} />);
  const nextButton = component.find('button');
  expect(nextButton.prop('disabled')).toBe(true);
});
