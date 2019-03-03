import React from 'react';
import { QuestionMode, QuestionType } from './QuestionType';
import Textarea from '../Input/Textarea';
import Text from '../Input/Text';
import Dropdown from '../Input/Dropdown';
import Radio from '../Input/Radio';
import { AnswerType } from './AnswerType';
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
    const defaultValue = answer ? answer.text : '';

    switch (question.mode) {
      case QuestionMode.TEXT:
        return <Text defaultValue={defaultValue} onChange={this.props.onAnswer}/>;
      case QuestionMode.TEXTAREA:
        return <Textarea defaultValue={defaultValue} onChange={this.props.onAnswer}/>;
      case QuestionMode.SINGLE_DROP_DOWN:
        return <Dropdown defaultValue={defaultValue} options={question.options || []} onChange={this.props.onAnswer}/>;
      case QuestionMode.SINGLE_RADIO:
        return <Radio defaultValue={defaultValue} options={question.options || []} onChange={this.props.onAnswer}/>;
      default:
        return <span>ERROR!</span>;
    }
  }
}

export default Question;
