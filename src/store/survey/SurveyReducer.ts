import { SurveyActionEnumType, SurveyActionType, SurveyStateType } from './types';
import { QuestionType } from '../../components/Question/QuestionType';

const INITIAL_STATE: SurveyStateType = {
  answeredQuestions: [],
  currentIndex: 1,
  finished: false,
};

class SurveyReducer {

  public setState(state = INITIAL_STATE, action: SurveyActionType): SurveyStateType {
    // Set the answer to right position in the array
    const answeredQuestions: QuestionType[] = Object.assign([], state.answeredQuestions);
    if (action.currentQuestion) {
      answeredQuestions[state.currentIndex - 1] = action.currentQuestion; // Questions start with 1, array index starts with 0
    }

    switch (action.type) {
      case SurveyActionEnumType.NEXT:
      case SurveyActionEnumType.PREVIOUS:
        return {
          ...state,
          answeredQuestions,
          currentIndex: action.toIndex,
          finished: false,
        };
      case SurveyActionEnumType.FINISH:
        return {
          ...state,
          answeredQuestions,
          finished: true,
        };
    }

    return { ...state };
  }
}

const surveyReducer = new SurveyReducer();
export default surveyReducer;
