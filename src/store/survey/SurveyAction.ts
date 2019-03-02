import { SurveyActionEnumType, SurveyActionType } from './types';
import { history } from '../../Routes';
import { QuestionType } from '../../components/Question/QuestionType';
import { QUESTION_LIST } from '../../constants/QuestionList';

class SurveyAction {

  public next(currentQuestion: QuestionType, currentIndex: number): SurveyActionType {
    const toIndex = currentIndex + 1;
    const type = toIndex > QUESTION_LIST.length ? SurveyActionEnumType.FINISH : SurveyActionEnumType.NEXT;
    if (type === SurveyActionEnumType.FINISH) {
      history.push('/survey/result');
    } else {
      history.push(`/survey/questions/${toIndex}`);
    }

    return { currentQuestion, toIndex, type };
  }

  public prev(currentIndex: number): SurveyActionType {
    const toIndex = currentIndex - 1;
    history.push(`/survey/questions/${toIndex}`);

    return { toIndex, type: SurveyActionEnumType.PREVIOUS };
  }
}

const surveyAction = new SurveyAction();
export default surveyAction;
