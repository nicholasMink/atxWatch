import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../utils/history';
import Monitor from '../Monitor/Monitor';
import Header from '../design/layouts/Header';

function App() {
  return (
    <div className="app-wrapper">
      <Router history={history}>
        <Header title="ATX Watch" />
        <Monitor />
        {/* <Sidebar />
        <main className="app-wrapper--main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </main> */}
      </Router>
    </div>
  );
}

export default App;
