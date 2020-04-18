let min = 1, 
    max = 10,
    winninNum = randomNumer(min, max),
    guess = 3;

//UI components
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn');
      message = document.querySelector('.output-message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function() {
    let guessVal = parseInt(guessInput.value);
    
    if(isNaN(guessVal) || guessVal > min || guessVal < max) {
        setMessage(`Please Enter a Number between ${min} and ${max}`, 'red');
    }

    if(guessVal == winninNum) {
        guessInput.style.borderColor = 'green';
        guessInput.disabled = true;
        setMessage(`${guessVal} is correct number. YOU WIN!!!`, 'green');
    } else {
        guess-=1;

        if(guess == 0) {
            guessInput.style.borderColor = 'red';
            guessInput.disabled = true;
            setMessage(`GAME OVER. Correct Number was ${winninNum}`, 'red');
        } else {
            guessInput.value = '';
            guessInput.style.borderColor = 'red';
            setMessage(`Wrong Number. You have ${guess} chances left`, 'red');
        }
    }
});

function randomNumer(min, max) {
    return Math.floor(Math.random()*(max - min +1)+min);   
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}