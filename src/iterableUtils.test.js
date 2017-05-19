import * as utils from './iterableUtils';

test('collect() collects a generator into an array', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = utils.collect(function* () {
    for (let el of sourceArray) {
      yield el;
    }
  }());

  expect(resultArray).toEqual(sourceArray);
});

test('collect() collects a generator into an array when the generator is a generator function', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = utils.collect(function* () {
    for (let el of sourceArray) {
      yield el;
    }
  });

  expect(resultArray).toEqual(sourceArray);
});

test('map() converts source values into resultant values', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = [];

  for (let element of utils.map(sourceArray, (x) => x * 2)) {
    resultArray.push(element);
  }

  expect(resultArray).toEqual([2, 4, 6]);
});

test('take() discards elements past the maximum', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = [];

  for (let element of utils.take(sourceArray, 2)) {
    resultArray.push(element);
  }

  expect(resultArray).toEqual([1, 2]);
});

test('can chain map() and collect()', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = utils.collect(utils.map([1, 2, 3], x => x * 2));

  expect(resultArray).toEqual([2, 4, 6]);
});

test('skip() discards the given number of elements and returns the rest of the array', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = [];

  for (let element of utils.skip(sourceArray, 1)) {
    resultArray.push(element);
  }

  expect(resultArray).toEqual([2, 3]);
});
