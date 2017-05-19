import React from 'react';
import Pager, {NextPageButton} from '../Pager';
import {shallow, mount} from 'enzyme';

it('should show Next button as disabled when there are no more pages', () => {
  const component = shallow(<Pager pages={1} currentPage={1} />);
  const button = component.find(NextPageButton);
  expect(button.prop('disabled')).toBe(true);
});

it('should show Next button as enabled when there are more pages', () => {
  const component = shallow(<Pager pages={2} currentPage={1} />);
  const button = component.find(NextPageButton);
  expect(button.prop('disabled')).toBe(false);
});

it('should trigger the onClick handler in Pager when the Next button is clicked', () => {
  let wasCalled = false;
  const component = shallow(<Pager pages={1} currentPage={1} onNext={onNext} />);
  const button = component.find(NextPageButton);
  button.prop('onClick')();
  expect(wasCalled).toBe(true);

  function onNext() {
    wasCalled = true;
  }
});
