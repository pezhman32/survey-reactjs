import { SurveyActionEnumType, SurveyActionType } from './types';
import { history } from '../../Routes';
import { QuestionType } from '../../components/Question/QuestionType';
import { QUESTION_LIST } from '../../constants/QuestionList';

class SurveyAction {

  public next(currentQuestion: QuestionType, currentIndex: number): SurveyActionType {
    const toIndex = currentIndex + 1;
    const type = toIndex > QUESTION_LIST.length ? SurveyActionEnumType.FINISH : SurveyActionEnumType.NEXT;

    if (toIndex > QUESTION_LIST.length && type !== SurveyActionEnumType.FINISH) {
      return this.reset();
    }

    if (type === SurveyActionEnumType.FINISH) {
      history.push('/survey/result');
    } else {
      history.push(`/survey/questions/${toIndex}`);
    }

    return { currentQuestion, toIndex, type };
  }

  public saveAnswer(currentQuestion: QuestionType, currentIndex: number, answer: string): SurveyActionType {
    const answeredQuestion = Object.assign({}, currentQuestion);
    answeredQuestion.answer = { text: answer };

    return { currentQuestion: answeredQuestion, toIndex: currentIndex, type: SurveyActionEnumType.SAVE_ANSWER };
  }

  public prev(currentIndex: number): SurveyActionType {
    const toIndex = currentIndex - 1;
    if (toIndex <= 0) {
      return this.reset();
    }

    history.push(`/survey/questions/${toIndex}`);

    return { toIndex, type: SurveyActionEnumType.PREVIOUS };
  }

  public reset(): SurveyActionType {
    history.push('/');

    return { toIndex: 1, type: SurveyActionEnumType.RESET };
  }
}

const surveyAction = new SurveyAction();
export default surveyAction;
