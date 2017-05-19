import React from 'react';
import { collect, map, take, skip } from './generatorUtils';

/**
 * Creates a new pageable match list
 *
 * Props:
 *
 * - matches: A list of matches to render.
 * - perPage: The maximum number of matches to render per page. Defaults to showing all matches.
 * - onMatchClicked: A callback that is invoked once a match list entry is clicked.
 * - initialPage: The page to render initially. Defaults to the first page. This is not zero-indexed.
 */
export default function MatchList({ matches, perPage = matches.length, onMatchClicked, initialPage = 1 }) {
  const elementsToSkip = (initialPage - 1) * perPage;
  const matchesToRender = take(skip(matches, elementsToSkip), perPage);
  const components = collect(map(matchesToRender, mapMatchToEntry));

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

export function MatchListEntry() {
  return null;
}
