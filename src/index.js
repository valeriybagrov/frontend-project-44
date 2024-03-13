import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min) + min);

// ask pathern questions
const makeQuestion = (userName, questAndCorrAnsw) => {
  const { question, correctAnswer } = questAndCorrAnsw;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');

  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!)`);
  return false;
};

const askThreeQuestions = (func, messange, userName) => {
  console.log(messange);
  for (let _ = 0; _ < 3; _ += 1) {
    // user lose
    if (!func()) return false;
  }
  // user win
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export { askThreeQuestions, getRandomInt, makeQuestion };
