'use strict';

/* 
DOM = Document Object Model (WEB API)
*/
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 60;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
