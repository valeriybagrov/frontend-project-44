import engine from '../engine.js';
import getRandomInt from '../getRandomInt.js';

const findGcd = (...arrgs) => {
  const array = [...arrgs];
  while (array[0] !== array[1]) {
    array.sort((a, b) => a - b);
    array[1] -= array[0];
  }
  return String(array[0]);
};

const getPareOfNumber = () => {
  const firstInt = getRandomInt(1, 50);
  const secondInt = getRandomInt(1, 50);
  const question = `${firstInt} ${secondInt}`;
  const correctAnswer = findGcd(firstInt, secondInt);
  return { question, correctAnswer };
};

export default () => engine(
  'Find the greatest common divisor of given numbers.',
  getPareOfNumber,
);
