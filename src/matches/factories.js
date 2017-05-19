// Contains factory functions for testing
// We can't put this in the __tests__ folder because then Jest thinks its a test
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

