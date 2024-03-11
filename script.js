'use strict';

// let message = (document.querySelector('.message').textContent =
//   '🎉 Correct Number');
// console.log(message);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// const inputGuess = document.querySelector('.guess ');
// inputGuess.value = 23;

const buttonCheck = document.querySelector('.check');
//Le type de l'input est en string ila faut le convertire en nombre.
const inputGuess = Number(document.querySelector('.guess').value);

buttonCheck.addEventListener('click', function () {
  console.log(inputGuess, typeof inputGuess);
});
