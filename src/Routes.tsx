import React from 'react';
import { Router, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Survey from './routes/Survey/Survey';
import createBrowserHistory from 'history/createBrowserHistory';
import Result from "./routes/Result/Result";

export const history = createBrowserHistory();

class Routes extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route path="/survey/questions/:index" component={Survey} />
          <Route path="/survey/result" component={Result} />
        </div>
      </Router>
    );
  }
}

export default Routes;
