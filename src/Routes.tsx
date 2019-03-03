import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './routes/Home/Home';
import Survey from './routes/Survey/Survey';
import createBrowserHistory from 'history/createBrowserHistory';
import Result from './routes/Result/Result';
import NotFound from './routes/Error/NotFound';

export const history = createBrowserHistory();

class Routes extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/survey/questions/:index" component={Survey} />
          <Route path="/survey/result" component={Result} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
