import React from 'react';
import MatchListPage from './MatchListPage';

export default function MatchListRouteHandler({ data }) {
  if (data.loading) {
    return <h1>Loading...</h1>;
  }

  if (data.error) {
    return <h1>Error!</h1>;
  }

  return <MatchListPage matches={data.matches} />;
}
