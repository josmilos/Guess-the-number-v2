let counter = 0;
let guessedNumber;
let correctNumber;
let element = document.querySelector('#paragraph');
let count = document.querySelector('#count');

function generateNumber(){
    correctNumber = parseInt(Math.floor(Math.random() * 10) + 1);

    if(correctNumber <= 0 || correctNumber >= 11){
        generateNumber();
    }
}

function guess(){
    
    
    
    guessedNumber = parseInt(document.querySelector('#nmbr').value);
    element.style.display="none";

    if(isNaN(guessedNumber)){
        element = document.querySelector('#paragraph')
        element.setAttribute('style', 'color:darkred');
        element.style.display="block";
        element.innerHTML = 'Your input was not a number. Please enter number!';
        
        return;
    }
    else if(guessedNumber <= 0 || guessedNumber >= 11){
        element = document.querySelector('#paragraph')
        element.setAttribute('style', 'color:darkred');
        element.style.display="block";
        element.innerHTML = 'Your input was out of range. Please enter number between 1 and 10!';
        
        return;
    }

    count.innerHTML = `Guesses left: ${2 - counter}`;

    switch(counter){

        case 0:
            generateNumber();
            console.log('New game started');
            console.log('Correct number: ' + correctNumber);
            

            if(guessedNumber === correctNumber){
                element = document.querySelector('#paragraph')
                element.setAttribute('style', 'color:green');
                element.style.display="block";
                element.innerHTML = '<b>Your guess was correct!<b>';
                counter = 0;
                return;
            }

            element = document.querySelector('#paragraph')
            element.setAttribute('style', 'color:red');
            element.style.display="block";
            if(guessedNumber > correctNumber){
                element.innerHTML = 'Your number was greater than correct one! Try again';
            }
            else{
                element.innerHTML = 'Your number was lower than correct one! Try again';
            }

            counter++;
            break;
        case 1:
            console.log('Correct number: ' + correctNumber);

            if(guessedNumber === correctNumber){
                element = document.querySelector('#paragraph')
                element.setAttribute('style', 'color:green');
                element.style.display="block";
                element.innerHTML = '<b>Your guess was correct!<b>';
                counter = 0;
                return;
            }

            element = document.querySelector('#paragraph')
            element.setAttribute('style', 'color:red');
            element.style.display="block";
            if(guessedNumber > correctNumber){
                element.innerHTML = 'Your number was greater than correct one! Try again';
            }
            else{
                element.innerHTML = 'Your number was lower than correct one! Try again';
            }

            counter++;
            break;

        case 2:
            console.log('Correct number: ' + correctNumber);

            if(guessedNumber === correctNumber){
                element = document.querySelector('#paragraph')
                element.setAttribute('style', 'color:green');
                element.style.display="block";
                element.innerHTML = '<b>Your guess was correct!<b>';
                counter = 0;
                return;
            }

            element = document.querySelector('#paragraph')
            element.setAttribute('style', 'color:red');

            element.style.display="block";

            element.innerHTML = '<b>You did not have luck this time. Start a new game.</b>';
            counter = 0;
            break;

        default:

            counter = 0;
            break;
    }
    
}


