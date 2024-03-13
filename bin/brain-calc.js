#!/usr/bin/env node

import greeting from '../src/cli.js';
import { makeQuestion, askThreeQuestions, getRandomInt } from '../src/index.js';

const userName = greeting();
const operSign = ['+', '-', '*'];

const generatExpression = () => {
  const sign = operSign[getRandomInt(0, 2)];
  const question = `${getRandomInt(1, 35)} ${sign} ${getRandomInt(1, 35)}`;
  const correctAnswer = String(eval(question));

  return { question, correctAnswer };
};

const callBackQuestion = () => makeQuestion(userName, generatExpression());

askThreeQuestions(
  callBackQuestion,
  'What is the result of the expression?',
  userName,
);
