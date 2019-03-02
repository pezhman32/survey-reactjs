import React from 'react';
import { QuestionType } from '../Question/QuestionType';

interface ResultProps {
  question: QuestionType;
}

class ResultRow extends React.Component<ResultProps> {

  public render(): React.ReactNode {
    const answer = this.props.question.answers ? this.props.question.answers[0] : { text: '{UNKNOWN}' };

    return (
      <div>
        <div>Question: {this.props.question.title}</div>
        <div>{answer.text}</div>
      </div>
    );
  }
}

export default ResultRow;
