import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import Survey from './routes/Survey';
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();

class Routes extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/survey/questions/:index" component={Survey} />
        </div>
      </Router>
    );
  }
}

export default Routes;
