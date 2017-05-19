import React from 'react';
import { collect, map } from '../iterableUtils';
import MatchListEntry from './MatchListEntry';

/**
 * A single page of matches in a Match List.
 */
export default function MatchListPage({ matches, onMatchClicked }) {
  const components = collect(map(matches, mapMatchToEntry));

  return <ol>
    {components}
  </ol>;

  function mapMatchToEntry(match) {
    if (match.gameId === undefined) {
      throw new TypeError("Each match must have an id that is defined");
    }

    return <MatchListEntry key={match.gameId} onClick={onMatchClicked} />;
  }
}
