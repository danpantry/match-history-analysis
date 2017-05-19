import React from 'react';
import {shallow} from 'enzyme';
import MatchListPage from '../MatchListPage';
import { matchesFactory } from '../factories';

it('should execute the onMatchClicked callback when a match is clicked', () => {
  let clickCount = 0;
  const component = shallow(<MatchListPage matches={matchesFactory(1)} onMatchClicked={onMatchClicked} />);
  const firstChild = component.children().first();
  firstChild.simulate('click');

  expect(clickCount).toBe(1);

  function onMatchClicked() {
    clickCount = clickCount + 1;
  }
});

// I don't like how the following tests know about the <li> used.
it('should set the key of the entries to the gameId of each match', () => {
  const matches = matchesFactory(1);
  const component = shallow(<MatchListPage matches={matches} />);
  const firstMatch = matches[0];
  const li = component.childAt(0);

  // Keys are string values
  expect(li.key()).toEqual(firstMatch.gameId.toString());
});

it('should throw an error if passed a match without a valid ID', () => {
  const matches = [
    { gameId: undefined }
  ];

  expect(() => {
    shallow(<MatchListPage matches={matches} />);
  }).toThrow("Each match must have an id that is defined");
});
