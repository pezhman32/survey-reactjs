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

    this.state = {
      answerValue: this.getAnsweredValue(props),
    };
  }

  public componentWillReceiveProps(nextProps: Readonly<SurveyProps>, nextContext: any): void {
    if (nextProps.survey.currentIndex !== this.props.survey.currentIndex) {
      this.setState({ answerValue: this.getAnsweredValue(nextProps) });
    }
  }

  public render(): React.ReactNode {
    const currentIndex = this.props.survey.currentIndex;
    const hasPrev = currentIndex !== 1;
    const hasNext = currentIndex !== QUESTION_LIST.length;

    return (
      <div>
        <h1>{'{Awesome Survey}'}</h1>

        OK Let's answer couple of questions...

        <Question question={this.getSelectedQuestion()} onAnswer={this.handleAnswer} answer={{ text: this.state.answerValue }} />
        <ProgressBar progress={currentIndex - 1} max={QUESTION_LIST.length}/>

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
    if (!this.state.answerValue) {
      alert('I know this alert is ugly! but please answer current question first :)');
      return;
    }

    const currentQuestion = this.getSelectedQuestion();
    currentQuestion.answer = { text: this.state.answerValue };
    this.props.next(currentQuestion, this.props.survey.currentIndex);

    this.setState({ answerValue: '' });
  }

  private handlePrev(): void {
    this.props.prev(this.props.survey.currentIndex);
  }

  private handleAnswer(answer: string): void {
    this.setState({ answerValue: answer });
  }

  /**
   * Returns the answer for selected question, if there is any in store
   */
  private getAnsweredValue(props: SurveyProps): string {
    const answeredQuestions = props.survey.answeredQuestions;
    const currentIndex = props.survey.currentIndex - 1;
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
  },
)(Survey);
