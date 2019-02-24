import React from 'react';
import { QuestionType } from './QuestionType';

interface QuestionProps {
  question: QuestionType;
}

class Question extends React.Component<QuestionProps> {
  public render(): React.ReactNode {
    const { title, mode } = this.props.question;

    return (
      <div>
        <div>Question: {title}</div>
      </div>
    );
  }
}

export default Question;
