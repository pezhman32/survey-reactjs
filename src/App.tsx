import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { AppState } from './store';
import { SurveyActionEnumType, SurveyActionType, SurveyStateType } from './store/survey/types';
import { connect } from 'react-redux';
import surveyAction from './store/survey/SurveyAction';
import { bindActionCreators, Dispatch } from 'redux';
import { QuestionMode } from './components/Question/QuestionType';

const mapStateToProps = (state: AppState) => ({
  survey: state.survey,
});

/*=> ({
  nextQuestion: (answer: string) => dispatch(surveyAction.nextQuestion(answer)),
})*/

interface AppProps {
  survey: SurveyStateType;
  nextQuestion: typeof surveyAction.nextQuestion;
}

/*const mapDispatchToProps = (dispatch: Dispatch<any>) => bindActionCreators(
  {
    nextQuestion: surveyAction.nextQuestion,
  },
  dispatch,
);*/

class App extends React.Component<AppProps> {
  render() {
    console.log('>>> typeof dispatch', this.props);
    this.props.nextQuestion({ currentQuestion: { title: '', mode: QuestionMode.SINGLE_RADIO }, toIndex: 1, type: SurveyActionEnumType.NEXT });

    return (
      <Routes/>
    );
  }
}

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  { nextQuestion: surveyAction.nextQuestion },
)(App);
