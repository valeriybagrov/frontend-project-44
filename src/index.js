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

const getRandomInt = (min, max) => Math.round(Math.random() * (max - min) + min);

const checkAnswer = (correctAnswer, answer, userName) => {
  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!)`);
  return false;
};

export { askThreeQuestions, getRandomInt, checkAnswer };
