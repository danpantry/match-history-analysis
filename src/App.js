import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MatchListRouteHandler from './matches';

export function App() {
  return <BrowserRouter>
    <MatchListRouteHandler />
  </BrowserRouter>;
}

export default App;
