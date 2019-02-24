import { AnswerType } from './AnswerType';

export enum QuestionMode {
  SINGLE_DROP_DOWN,
  SINGLE_RADIO,
  TEXT,
}

export type QuestionType = {
  title: string;
  mode: QuestionMode;
  options?: string[];
  answers?: AnswerType[];
};
