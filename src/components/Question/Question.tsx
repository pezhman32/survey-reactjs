import React from 'react';
import { QuestionMode, QuestionType } from './QuestionType';
import AnswerText from '../Answer/AnswerText';
import AnswerDropdown from '../Answer/AnswerDropdown';
import AnswerRadio from '../Answer/AnswerRadio';
import { AnswerType } from '../Answer/AnswerType';
import './Question.css';

interface QuestionProps {
  question: QuestionType;
  onAnswer: (v: string) => void;
  answer?: AnswerType;
}

class Question extends React.Component<QuestionProps> {

  public render(): React.ReactNode {
    return (
      <div className="Question">
        <p>
          <b>{this.props.question.title}</b>
        </p>
        {this.renderAnswer(this.props.question, this.props.answer)}
      </div>
    );
  }

  private renderAnswer(question: QuestionType, answer?: AnswerType): React.ReactNode {
    switch (question.mode) {
      case QuestionMode.TEXT:
        return <AnswerText answer={answer} onChange={this.props.onAnswer}/>;
      case QuestionMode.SINGLE_DROP_DOWN:
        return <AnswerDropdown answer={answer} options={question.options || []} onChange={this.props.onAnswer}/>;
      case QuestionMode.SINGLE_RADIO:
        return <AnswerRadio answer={answer} options={question.options || []} onChange={this.props.onAnswer}/>;
      default:
        return <span>ERROR!</span>;
    }
  }
}

export default Question;
