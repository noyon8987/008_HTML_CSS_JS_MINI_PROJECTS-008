(()=>{
    let form = document.querySelector('form');
    let inputNumber = document.querySelector('.input_namber');
    let submitBtn = document.querySelector('.submit_btn');
    let startBtn = document.querySelector('.start_btn');
    let result = document.querySelector('.result');
    let guessesNumber = document.querySelector('.guesses_number');
    
    let guessNumber = [];
    let randomNumber = Math.round(Math.random()*100);
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        let userInputNumber = parseInt(inputNumber.value);
    
        if (userInputNumber < randomNumber){
            result.innerHTML = 'To Low!'
        } else if (userInputNumber > randomNumber){
            result.innerHTML = 'To High!'
        } else {
            result.innerHTML = 'You got it! Congrats'
            startBtn.disabled = false;
            submitBtn.disabled = true;
        }
        guessNumber.push(userInputNumber);
        guessesNumber.innerHTML = "You guesses: " + guessNumber.join(', ');
        form.reset();
    
        startBtn.addEventListener('click', function(){
            result.innerHTML = '';
            guessesNumber.innerHTML = '';
            startBtn.disabled = true;
            submitBtn.disabled = false;
            randomNumber = Math.round(Math.random()*100);
        })
    })
    })()
    