#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
import { checkAnswer, askThreeQuestions, getRandomInt } from '../src/index.js';

const userName = greeting();

function makeQuestion() {
  const int = getRandomInt(1, 15);
  console.log(`Question: ${int}`);
  const answer = readlineSync.question('Your answer: ');
  const corectAnswer = int % 2 === 0 ? 'yes' : 'no';
  return checkAnswer(corectAnswer, answer, userName);
}

askThreeQuestions(makeQuestion, 'Answer "yes" if the number is even, otherwise answer "no".', userName);
