import engine from '../engine.js';
import getRandomInt from '../getRandomInt.js';

function getInt() {
  const question = getRandomInt(1, 50);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
}

export default () => engine(
  'Answer "yes" if the number is even, otherwise answer "no".',
  getInt,
);
