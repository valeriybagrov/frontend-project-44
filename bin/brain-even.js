#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const userName = greeting();

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const askThreeQuestions = (func) => {
  for (let _ = 0; _ < 3; _ += 1) {
  // user lose
    if (!func()) return false;
    // user win
    if (_ === 2) console.log(`Congratulations, ${userName}!`);
  }
  return true;
};

function makeQuestion() {
  const int = getRandomInt(1, 15);
  console.log(`Question: ${int}`);
  const answer = readlineSync.question('Your answer: ');
  const corectAnswer = int % 2 === 0 ? 'yes' : 'no';

  if (corectAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${corectAnswer}'.\nLet's try again, ${userName}!)`);
  return false;
}

console.log('Answer "yes" if the number is even, otherwise answer "no".');

askThreeQuestions(makeQuestion);

export { getRandomInt, askThreeQuestions };
