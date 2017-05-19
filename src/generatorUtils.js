// Generator functions so we don't create loads of copies of the same array
// Not really necessary, but it's fun
export function* take(array, maximum) { 
  for (let i = 0; i < maximum; i++) {
    if (i > array.length) {
      return;
    }
    
    yield array[i];
  }
}

export function* map(array, functor) {
  for (let element of array) {
    yield functor(element);
  }
}

export function collect(generatorOrGeneratorFactory) {
  if (typeof generatorOrGeneratorFactory === 'function') {
    generatorOrGeneratorFactory = generatorOrGeneratorFactory();
  }

  const elements = [];
  for (let element of generatorOrGeneratorFactory) {
    elements.push(element);
  }

  return elements;
}
