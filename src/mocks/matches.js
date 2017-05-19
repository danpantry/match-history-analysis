import { Query } from '../matches/MatchListRouteHandlerContainer';

export default [
  {
    request: { query: Query },
    result: {
      data: {
        matches: [
          {
            gameId: 'test',
            __typename: 'Matches'
          }
        ]
      }
    }
  }
];
