#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import { checkAnswer, askThreeQuestions, getRandomInt } from '../src/index.js';

const userName = greeting();
const operSign = ['+', '-', '*'];

const makeQuestion = () => {
  // get string expression
  const expression = `${getRandomInt(1, 35)} ${operSign[getRandomInt(0, 2)]} ${getRandomInt(1, 35)}`;
  console.log(`Question: ${expression}`);

  const answer = readlineSync.question('Your answer: ');
  const corectAnswer = String(eval(expression));
  return checkAnswer(corectAnswer, answer, userName);
};

askThreeQuestions(makeQuestion, 'What is the result of the expression?', userName);
