import { SurveyActionEnumType, SurveyActionType, SurveyStateType } from './types';

const INITIAL_STATE: SurveyStateType = {
  answeredQuestions: [],
  currentIndex: 1,
  finished: false,
};

class SurveyReducer {

  public setState(state = INITIAL_STATE, action: SurveyActionType): SurveyStateType {
    console.log('>>> reducer.state', state);

    switch (action.type) {
      case SurveyActionEnumType.NEXT:
      case SurveyActionEnumType.PREVIOUS:
        return { ...state, currentIndex: action.toIndex, finished: false };
      case SurveyActionEnumType.FINISH:
        return { ...state, finished: true };
    }

    return { ...state };
  }
}

const surveyReducer = new SurveyReducer();
export default surveyReducer;
