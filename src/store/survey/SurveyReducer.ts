import {SurveyActionEnumType, SurveyActionType, SurveyStateType} from './types';
import {QuestionType} from '../../components/Question/QuestionType';
import {clearState, loadState, saveState} from '../index';

const DEFAULT_STATE: SurveyStateType = {
  answeredQuestions: [],
  currentIndex: 1,
  finished: false,
};

const INITIAL_STATE: SurveyStateType = loadState('survey', DEFAULT_STATE);

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
      case SurveyActionEnumType.SAVE_ANSWER:
        return saveState('survey', {
          ...state,
          answeredQuestions,
          currentIndex: action.toIndex,
          finished: false,
        });
      case SurveyActionEnumType.FINISH:
        return saveState('survey', {
          ...state,
          answeredQuestions,
          finished: true,
        });
      case SurveyActionEnumType.RESET:
        clearState('survey');
        return saveState('survey', DEFAULT_STATE);
    }

    return saveState('survey', { ...state });
  }
}

const surveyReducer = new SurveyReducer();
export default surveyReducer;
