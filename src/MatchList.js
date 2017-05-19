import React from 'react';
import { collect, take, skip } from './iterableUtils';
import MatchListPage from './MatchListPage';
import Pager from './Pager';

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
  const numberOfPages = Math.ceil(matches.length / perPage);
  const elementsToSkip = (initialPage - 1) * perPage;
  const matchesToRender = collect(take(skip(matches, elementsToSkip), perPage));

  return <div>
    <MatchListPage matches={matchesToRender} />
    <Pager pages={numberOfPages} currentPage={initialPage} />
  </div>;
}
