import engine from '../engine.js';
import getRandomInt from '../getRandomInt.js';

const isPrime = (int) => {
  if (int < 2) return false;
  for (let divider = 2; divider <= Math.sqrt(int); divider += 1) {
    if (int % divider === 0) return false;
  }
  return true;
};

const makeQuestion = () => {
  const question = getRandomInt(1, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => engine(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  makeQuestion,
);
