import Question from './Question';
import { QuestionMode, QuestionType } from './QuestionType';
import React from 'react';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';
import { AnswerType } from './AnswerType';

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
});

it('should render text input with default value', () => {
  const q: QuestionType = { title: 'test title', mode: QuestionMode.TEXT };
  const answer: AnswerType = { text: 'answer#1' };
  const onAnswer = (v:string) => {};

  act(() => {
    ReactDOM.render(<Question question={q} onAnswer={onAnswer} answer={answer}/>, container);
  });

  const input = container.querySelector('input');
  expect(input).toBeDefined();
  expect(input.getAttribute('type')).toBe('text');
  expect(input.value).toBe(answer.text);
});

it('should render textarea with default value', () => {
  const q: QuestionType = { title: 'test title', mode: QuestionMode.TEXTAREA };
  const answer: AnswerType = { text: 'answer#1' };
  const onAnswer = (v:string) => {};

  act(() => {
    ReactDOM.render(<Question question={q} onAnswer={onAnswer} answer={answer}/>, container);
  });

  const input = container.querySelector('textarea');
  expect(input).toBeDefined();
  expect(input.value).toBe(answer.text);
});

it('should render dropdown with checked value', () => {
  const q: QuestionType = { title: 'test title', mode: QuestionMode.SINGLE_DROP_DOWN, options: ['answer#0', 'answer#1'] };
  const answer: AnswerType = { text: 'answer#1' };
  const onAnswer = (v:string) => {};

  act(() => {
    ReactDOM.render(<Question question={q} onAnswer={onAnswer} answer={answer}/>, container);
  });

  const input = container.querySelector('select');
  expect(input).toBeDefined();

  const option: HTMLOptionElement | null = container.querySelector('select option:checked');
  expect(option).toBeDefined();
  expect(option.value).toBe(answer.text);
});

it('should render radio with checked value', () => {
  const q: QuestionType = { title: 'test title', mode: QuestionMode.SINGLE_RADIO, options: ['answer#0', 'answer#1'] };
  const answer: AnswerType = { text: 'answer#1' };
  const onAnswer = (v:string) => {};

  act(() => {
    ReactDOM.render(<Question question={q} onAnswer={onAnswer} answer={answer}/>, container);
  });

  const option: HTMLInputElement | null = container.querySelector('input:checked');
  expect(option).toBeDefined();
  expect(option.getAttribute('type')).toBe('radio');
  expect(option.value).toBe(answer.text);
});
