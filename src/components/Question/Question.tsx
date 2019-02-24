import React from 'react';
import { QuestionMode, QuestionType } from './QuestionType';
import AnswerText from '../Answer/AnswerText';
import AnswerDropdown from '../Answer/AnswerDropdown';
import AnswerRadio from '../Answer/AnswerRadio';

interface QuestionProps {
  question: QuestionType;
}

class Question extends React.Component<QuestionProps> {
  public render(): React.ReactNode {

    return (
      <div>
        <div>Question: {this.props.question.title}</div>
        {this.renderAnswer(this.props.question)}
      </div>
    );
  }

  private renderAnswer(question: QuestionType): React.ReactNode {

    switch (question.mode) {
      case QuestionMode.TEXT:
        return <AnswerText onChange={this.onAnswer}/>;
      case QuestionMode.SINGLE_DROP_DOWN:
        return <AnswerDropdown options={question.options || []} onChange={this.onAnswer}/>;
      case QuestionMode.SINGLE_RADIO:
        return <AnswerRadio options={question.options || []} onChange={this.onAnswer}/>;
      default:
        return <span>ERROR!</span>;
    }
  }

  private onAnswer(value: string): void {
    console.log('>>> onAnswer.value', value);
  }
}

export default Question;