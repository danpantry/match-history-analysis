// Generator functions so we don't create loads of copies of the same array
// Not really necessary, but it's fun
// Note that we can never use a property from an array since all of these functions *should* be chainable and thus work over *any* iterable.
export function* take(iterable, maximum) {
  let i = 0;

  for (let element of iterable) {
    if (i >= maximum) {
      return;
    }

    yield element;
    i = i + 1;
  }
}

export function* map(iterable, functor) {
  for (let element of iterable) {
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

export function* skip(iterable, number) {
  let i = 0;

  for (let element of iterable) {
    i = i + 1;
    if (i <= number) {
      continue;
    }

    yield element;
  }
}
