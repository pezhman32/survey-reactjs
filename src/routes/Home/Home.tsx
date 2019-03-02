import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';

class Home extends React.Component<RouteComponentProps> {

  public render(): React.ReactNode {
    return (
      <div>
        <h1>Welcome to {'{Awesome Survey}'}</h1>

        Are you ready?
        <br />
        <Link to={`${this.props.match.url}survey/questions/1`}>Hell Yeah!</Link> /&nbsp;
        <a href="#" onClick={Home.handleNope}>Nope!</a>
      </div>
    );
  }

  private static handleNope() {
    alert("That's sad and this message is ugly :(");
  }
}

export default Home;
