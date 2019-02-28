import React from 'react';
import { RouteComponentProps } from 'react-router';
import Question from '../components/Question/Question';
import { QUESTION_LIST } from '../constants/QuestionList';
import { QuestionType } from '../components/Question/QuestionType';
import { AppState } from '../store';
import { SurveyActionEnumType, SurveyStateType } from '../store/survey/types';
import surveyAction from '../store/survey/SurveyAction';
import { connect } from 'react-redux';

interface SurveyProps extends RouteComponentProps<any> {
  survey: SurveyStateType;
  nextQuestion: typeof surveyAction.nextQuestion;
}

interface SurveyState {
  answerValue: string;
}

class Survey extends React.Component<SurveyProps, SurveyState> {

  constructor(props: Readonly<SurveyProps>) {
    super(props);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
  }

  public render(): React.ReactNode {
    const hasPrev = this.getCurrentIndex() !== 1;
    const hasNext = this.getCurrentIndex() !== QUESTION_LIST.length;

    return (
      <div>
        Question list...
        <Question question={this.getSelectedQuestion()} onAnswer={this.handleAnswer} />

        {hasPrev ? <button onClick={this.handleNavigation.bind(this, -1)}>Prev.</button> : ''}
        {hasNext ? <button onClick={this.handleNavigation.bind(this, 1)}>Next</button> : ''}
        {!hasNext ? <button onClick={this.handleResultClick}>See overview</button> : ''}
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

  private handleNavigation(to: 1 | -1): void {
    if (!this.state.answerValue) {
      alert('I know this alert is ugly! but please answer current question first :)');
      return;
    }

    const toIndex = this.getCurrentIndex() + to;
    const currentQuestion = this.getSelectedQuestion();
    currentQuestion.answers = [{ text: this.state.answerValue }];
    this.props.nextQuestion({ currentQuestion, toIndex, type: SurveyActionEnumType.NEXT });

    this.setState({ answerValue: '' });
  }

  private handleResultClick(): void {
    // TODO navigate to results page
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
  { nextQuestion: surveyAction.nextQuestion },
)(Survey);
