const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const numberToGuess = Math.floor(Math.random() * 1000);
console.log('Я загадал', numberToGuess );

function question(){
    rl.question('Введите число от 0 до 999: ', (input) => {
        let numberFromUser = +input;

        if (numberFromUser == 'q'){
            rl.close();
            console.log('Выход');
            return
        }

        if ( isNaN(numberFromUser) 
            || +numberFromUser < 0 
            || +numberFromUser > 999 ){
                console.log('Это не число от 0 до 999: ')
        }

        if (+numberFromUser == numberToGuess){
            console.log('Вы угадали!')
            rl.close();
            return
        }

        if (+numberFromUser > numberToGuess){
            console.log('Меньше')
        }

        if (+numberFromUser < numberToGuess){
            console.log('Больше')
        }

        rl.pause();
        question();
    })
}
question();