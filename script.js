'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent='Correct Answer✨';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent=10;
// document.querySelector('.number').textContent=13;
// document.querySelector('.guess').value=23;

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number🤷‍♀️';
  } else if (guess == SecretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer✨';
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > HighScore) {
      HighScore = score;
      document.querySelector('.highscore').textContent = HighScore;
    }
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Lesser Than Entered No.😂';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost😒';
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Greater Than Entered No.😂';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost😒';
    }
  }
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    SecretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
