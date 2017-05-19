import * as generatorUtils from './generatorUtils';

test('collect() collects a generator into an array', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = generatorUtils.collect(function* () {
    for (let el of sourceArray) {
      yield el;
    }
  }());

  expect(resultArray).toEqual(sourceArray);
});

test('collect() collects a generator into an array when the generator is a generator function', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = generatorUtils.collect(function* () {
    for (let el of sourceArray) {
      yield el;
    }
  });

  expect(resultArray).toEqual(sourceArray);
});

test('map() converts source values into resultant values', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = [];

  for (let element of generatorUtils.map(sourceArray, (x) => x * 2)) {
    resultArray.push(element);
  }

  expect(resultArray).toEqual([2, 4, 6]);
});

test('take() discards elements past the maximum', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = [];

  for (let element of generatorUtils.take(sourceArray, 2)) {
    resultArray.push(element);
  }

  expect(resultArray).toEqual([1, 2]);
});

test('can chain map() and collect()', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = generatorUtils.collect(generatorUtils.map([1, 2, 3], x => x * 2));

  expect(resultArray).toEqual([2, 4, 6]);
});

test('skip() discards the given number of elements and returns the rest of the array', () => {
  const sourceArray = [1, 2, 3];
  const resultArray = [];

  for (let element of generatorUtils.skip(sourceArray, 1)) {
    resultArray.push(element);
  }

  expect(resultArray).toEqual([2, 3]);
});
