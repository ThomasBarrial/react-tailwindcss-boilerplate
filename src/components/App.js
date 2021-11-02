import React from 'react';
import '../styles/styles.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
