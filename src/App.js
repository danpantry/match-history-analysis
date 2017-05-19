import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MatchListRouteHandler from './matches';
import withApollo from './withApollo';

export function App() {
  return withApollo(<BrowserRouter>
    <MatchListRouteHandler />
  </BrowserRouter>);
}

export default App;
