import React from 'react';
import ReactDOM from 'react-dom';
import MatchList, {MatchListEntry} from './MatchList';
import {shallow, mount} from 'enzyme';
import uuid from 'uuid';

function matchFactory() {
  return {
    id: uuid()
  };
}

function matchesFactory(number = 1) {
  const matches = [];
  for (let i = 0; i < number; i++) {
    matches.push(matchFactory());
  }
  return matches;
}

it('should render all matches if no perPage parameter is set', () => {
  const matches = matchesFactory(1);
  const component = shallow(<MatchList matches={matches} />);
  expect(component.children('li').length).toBe(matches.length);
});

it('should render, at maximum, the number of matches specified in perPage at one time', () => {
  const matches = matchesFactory(20);
  const maxMatches = 10;
  const component = shallow(<MatchList matches={matches} perPage={maxMatches} />);
  expect(component.children('li').length).toBe(maxMatches);
});

it('should throw an error if passed a match without a valid ID', () => {
  const matches = [
    { id: undefined }
  ];

  expect(() => {
    shallow(<MatchList matches={matches} />);
  }).toThrow("Each match must have an id that is defined");
});

it('should execute the onMatchClicked callback when a match is clicked', () => {
  const matches = matchesFactory(1);
  let clickCount = 0;
  const component = shallow(<MatchList matches={matches} onMatchClicked={onMatchClicked} />);
  const firstChild = component.children().first();
  firstChild.simulate('click');

  expect(clickCount).toBe(1);

  function onMatchClicked() {
    clickCount = clickCount + 1;
  }
});

// I don't like how this test "knows" about the <li>.
it('should display the first element on the first page', () => {
  const matches = matchesFactory(2);
  const component = shallow(<MatchList matches={matches} perPage={1} />);

  const firstMatch = matches[0];
  const li = component.childAt(0).get(0);
  expect(li).toEqual(<li key={firstMatch.id}>
    <MatchListEntry match={firstMatch} />
  </li>);
});

it('should display the second element on the second page', () => {
  const matches = matchesFactory(2);
  const component = shallow(<MatchList matches={matches} perPage={1} initialPage={2} />);

  const secondMatch = matches[1];
  const li = component.childAt(0).get(0);
  expect(li).toEqual(<li key={secondMatch.id}>
    <MatchListEntry match={secondMatch} />
  </li>);
});
