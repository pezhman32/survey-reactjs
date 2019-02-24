import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import Questions from './routes/Questions';

class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/questions/:index" component={Questions} />
        </div>
      </Router>
    );
  }
}

export default Routes;
