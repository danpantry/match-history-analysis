// Contains factory functions for testing
export function matchFactory() {
  return {
    gameId: Math.round(Math.random() * 100000)
  };
}

export function matchesFactory(number = 1) {
  const matches = [];
  for (let i = 0; i < number; i++) {
    matches.push(matchFactory());
  }
  return matches;
}

