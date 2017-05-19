import React from 'react';
import { collect, map } from './generatorUtils';

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

    return <li key={match.gameId} onClick={onMatchClicked}>
      <MatchListEntry match={match} />
    </li>;
  }
}

/**
 * A single entry in a match list page.
 */
export function MatchListEntry() {
  return null;
}
