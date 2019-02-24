import React from 'react';
import { RouteComponentProps } from 'react-router';

interface QuestionProps extends RouteComponentProps<any> {
}

class Questions extends React.Component<QuestionProps> {

  public render(): React.ReactNode {
    return (
      <div>
        Question list...
      </div>
    );
  }
}

export default Questions;
