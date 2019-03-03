import React  from 'react';
import { RouteComponentProps } from 'react-router';
import Question from '../../components/Question/Question';
import { QUESTION_LIST } from '../../constants/QuestionList';
import { QuestionType } from '../../components/Question/QuestionType';
import { AppState } from '../../store';
import { SurveyStateType } from '../../store/survey/types';
import surveyAction from '../../store/survey/SurveyAction';
import { connect } from 'react-redux';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './Survey.css';
import Logo from '../../components/Logo/Logo';

interface SurveyProps extends RouteComponentProps<any> {
  survey: SurveyStateType;
  next: typeof surveyAction.next;
  prev: typeof surveyAction.prev;
  saveAnswer: typeof surveyAction.saveAnswer;
}

class Survey extends React.Component<SurveyProps> {

  constructor(props: Readonly<SurveyProps>) {
    super(props);

    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  public componentDidUpdate(prevProps: Readonly<SurveyProps>, prevState: Readonly<{}>, snapshot?: any): void {
    // Properly handle redux state when using browser next/prev buttons
    const indexParam = Number.parseInt(this.props.match.params['index']);
    if (this.props.survey.currentIndex !== indexParam) {
      this.handlePrev();
    }
  }

  public render(): React.ReactNode {
    const currentIndex = this.props.survey.currentIndex;
    const hasPrev = currentIndex !== 1;
    const hasNext = currentIndex !== QUESTION_LIST.length;

    return (
      <div>
        <h1>
          <Logo />
        </h1>

        OK Let's answer couple of questions...

        <Question
          question={this.getSelectedQuestion()}
          onAnswer={this.handleAnswer}
          answer={{ text: this.getAnsweredValue() }} />

        <ProgressBar
          progress={currentIndex - 1}
          max={QUESTION_LIST.length} />

        <div className="Survey-navigation">
          {hasPrev ? <button onClick={this.handlePrev}>Prev.</button> : ''}
          {hasNext ? <button onClick={this.handleNext}>Next</button> : ''}
          {!hasNext ? <button onClick={this.handleNext}>See overview</button> : ''}
        </div>
        <div className="clearfix"/>
      </div>
    );
  }

  private handleNext(): void {
    const answeredQuestion = this.props.survey.answeredQuestions[this.props.survey.currentIndex - 1];
    const currentQuestion = answeredQuestion ? answeredQuestion : this.getSelectedQuestion();

    if (!currentQuestion.answer || !currentQuestion.answer.text) {
      alert('I know this alert is ugly! but please answer current question first :)');
      return;
    }

    this.props.next(currentQuestion, this.props.survey.currentIndex);
  }

  private handlePrev(): void {
    this.props.prev(this.props.survey.currentIndex);
  }

  private handleAnswer(answer: string): void {
    const currentQuestion = this.getSelectedQuestion();
    this.props.saveAnswer(currentQuestion, this.props.survey.currentIndex, answer);
  }

  /**
   * Returns the answer for selected question, if there is any in store
   */
  private getAnsweredValue(): string {
    const answeredQuestions = this.props.survey.answeredQuestions;
    const currentIndex = this.props.survey.currentIndex - 1;
    const answer = (answeredQuestions[currentIndex] && answeredQuestions[currentIndex].answer) ?
      answeredQuestions[currentIndex].answer : { text: '' };

    return answer ? answer.text : '';
  }

  /**
   * Returns current selected question
   */
  private getSelectedQuestion(): QuestionType {
    const index: number = this.props.survey.currentIndex - 1;
    // TODO check if index is valid...

    return QUESTION_LIST[index];
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
    saveAnswer: surveyAction.saveAnswer,
  },
)(Survey);
