import React from 'react';
import { collect, map, take } from './generatorUtils';

export default function MatchList({ matches, perPage = matches.length, onMatchClicked }) {
  const components = collect(map(take(matches, perPage), mapMatchToEntry));

  return <ol>
    {components}
  </ol>;

  function mapMatchToEntry(match) {
    if (match.id === undefined) {
      throw new TypeError("Each match must have an id that is defined");
    }

    return <li key={match.id} onClick={onMatchClicked}>
      <MatchListEntry match={match} />
    </li>;
  }
}

function MatchListEntry() {
  return null;
}
