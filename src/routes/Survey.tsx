import React from 'react';
import { RouteComponentProps } from 'react-router';
import Question from '../components/Question/Question';
import { QUESTION_LIST } from '../constants/QuestionList';
import { QuestionType } from '../components/Question/QuestionType';
import { AppState } from '../store';
import { SurveyStateType } from '../store/survey/types';
import surveyAction from '../store/survey/SurveyAction';
import { connect } from 'react-redux';
import ProgressBar from '../components/ProgressBar/ProgressBar';

interface SurveyProps extends RouteComponentProps<any> {
  survey: SurveyStateType;
  next: typeof surveyAction.next;
  prev: typeof surveyAction.prev;
}

interface SurveyState {
  answerValue: string;
}

class Survey extends React.Component<SurveyProps, SurveyState> {

  constructor(props: Readonly<SurveyProps>) {
    super(props);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  public render(): React.ReactNode {
    const currentIndex = this.getCurrentIndex();
    const hasPrev = currentIndex !== 1;
    const hasNext = currentIndex !== QUESTION_LIST.length;

    return (
      <div>
        <ProgressBar progress={currentIndex - 1} max={QUESTION_LIST.length}/>

        Question list...
        <Question question={this.getSelectedQuestion()} onAnswer={this.handleAnswer} />

        {hasPrev ? <button onClick={this.handlePrev}>Prev.</button> : ''}
        {hasNext ? <button onClick={this.handleNext}>Next</button> : ''}
        {!hasNext ? <button onClick={this.handleNext}>See overview</button> : ''}
      </div>
    );
  }

  private getCurrentIndex(): number {
    return Number.parseInt(this.props.match.params['index']);
  }

  private getSelectedQuestion(): QuestionType {
    const index: number = this.getCurrentIndex() - 1;
    // TODO check if index is valid...

    return QUESTION_LIST[index];
  }

  private handleNext(): void {
    if (!this.state.answerValue) {
      alert('I know this alert is ugly! but please answer current question first :)');
      return;
    }

    const currentQuestion = this.getSelectedQuestion();
    currentQuestion.answers = [{ text: this.state.answerValue }];
    this.props.next(currentQuestion, this.getCurrentIndex());

    this.setState({ answerValue: '' });
  }

  private handlePrev(): void {
    this.setState({ answerValue: '' });

    this.props.prev(this.getCurrentIndex());
  }

  private handleAnswer(answer: string): void {
    this.setState({ answerValue: answer });
  }
}

export default connect(
  (state: AppState) => ({
    survey: state.survey,
  }),
  // mapDispatchToProps,
  {
    next: surveyAction.next,
    prev: surveyAction.prev,
  },
)(Survey);
