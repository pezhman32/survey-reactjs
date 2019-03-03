import React from 'react';
import { QuestionType } from '../Question/QuestionType';
import './ResultRow.css';

interface ResultProps {
  question: QuestionType;
  number: number;
}

class ResultRow extends React.Component<ResultProps> {

  public render(): React.ReactNode {
    const answer = this.props.question.answer || { text: '{UNKNOWN}' };

    return (
      <div className="ResultRow">
        <div>#{this.props.number}. {this.props.question.title}</div>
        <div><b>{answer.text}</b></div>
      </div>
    );
  }
}

export default ResultRow;
