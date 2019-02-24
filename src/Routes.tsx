import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import Survey from './routes/Survey';

class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/survey/questions/:index" component={Survey} />
        </div>
      </Router>
    );
  }
}

export default Routes;
