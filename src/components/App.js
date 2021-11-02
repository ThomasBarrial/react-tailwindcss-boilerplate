import React from 'react';
import '../styles/styles.css';
import Rocket from './Rocket';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/rockets/:id" component={Rocket} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
