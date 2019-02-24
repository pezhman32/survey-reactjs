import React from 'react';
import { RouteComponentProps } from 'react-router';
import Question from '../components/Question/Question';
import { QUESTION_LIST } from '../constants/QuestionList';
import { QuestionType } from '../components/Question/QuestionType';

class Questions extends React.Component<RouteComponentProps<any>> {

  public render(): React.ReactNode {
    return (
      <div>
        Question list...
        <Question question={this.getSelectedQuestion()} />
      </div>
    );
  }

  private getSelectedQuestion(): QuestionType {
    const index: number = this.props.match.params['index'] - 1;
    // TODO check if index is valid...

    return QUESTION_LIST[index];
  }
}

export default Questions;
