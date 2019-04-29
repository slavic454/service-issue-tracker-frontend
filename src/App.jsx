import React from 'react';
import './styles/index.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Issues from './containers/Issues';

const App = () => (
  <div className="App">
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/issues" exact component={Issues} />
      </div>
    </Router>
  </div>
);

export default App;
