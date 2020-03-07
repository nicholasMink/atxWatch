import React from 'react';
import { Router } from 'react-router-dom';
import history from '../../utils/history';
import Monitor from '../Monitor/Monitor';
import Header from '../design/layouts/Header';

function App() {
  return (
    <div className="app-wrapper">
      <Router history={history}>
        <Header title="ATX Watch" />
        <Monitor />
      </Router>
    </div>
  );
}

export default App;
