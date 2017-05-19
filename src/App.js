import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MatchListRouteHandler from './MatchListRouteHandler';

export function App() {
  return <BrowserRouter>
    <MatchListRouteHandler />
  </BrowserRouter>;
}

export default App;
