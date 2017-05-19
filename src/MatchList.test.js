import React from 'react';
import ReactDOM from 'react-dom';
import MatchList from './MatchList';
import {shallow} from 'enzyme';
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
