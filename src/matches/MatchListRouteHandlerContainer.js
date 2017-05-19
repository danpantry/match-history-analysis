import MatchListRouteHandler from './MatchListRouteHandler';
import { gql, graphql, addTypenameToDocument } from 'react-apollo';

export const Query = addTypenameToDocument(gql`
  query GetMatches {
    matches {
      gameId
    }
  }
`);

export default graphql(Query)(MatchListRouteHandler);
