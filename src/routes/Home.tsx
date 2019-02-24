import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

class Home extends React.Component<RouteComponentProps> {

  public render(): React.ReactNode {
    return (
      <div>
        <Link to={`${this.props.match.url}survey/questions/1`}>To questions...</Link>
      </div>
    );
  }
}

export default Home;
