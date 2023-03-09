const { rejects } = require('assert');
const { resolve } = require('path');

const rl = require('readline').createInterface(process.stdin, process.stdout);

const numberToGuess = Math.floor(Math.random() * 1000);

function question(quest){
    return new Promise((resolve, reject) => {
        rl.question( quest, (numberFromUser) => {
            console.log('Вы ввели', numberFromUser);
            resolve(numberFromUser);
        })
    })
}

async function input() {
    while (true) {
        const numberFromUser = await question('Введите число от 0 до 999: ');

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

        // if (data === 'q'){
        //     rl.close();
        //     return;
        // }
    }
}



console.log('Я загадал', numberToGuess );

 input();


// const rl = require('readline').createInterface(process.stdin, process.stdout);

// const numberToGuess = Math.floor(Math.random() * 1000);
// console.log('Я загадал', numberToGuess );

// function question(){
//     rl.question('Введите число от 0 до 999', (numberFromUser) => {
//         if (numberFromUser == 'q'){
//             rl.close();
//             console.log('Выход');
//             return
//         }else
//         if ( isNaN(numberFromUser) 
//             || +numberFromUser < 0 
//             || +numberFromUser > 999 ){
//                 console.log('Это не число от 0 до 999')
//         }else
//         if (+numberFromUser === numberToGuess){
//             console.log('Вы угадали!')
//         }else
//         if (+numberFromUser > numberToGuess){
//             console.log('Меньше')
//         }else
//         if (+numberFromUser < numberToGuess){
//             console.log('Больше')
//         }
//         question();
//     })
// }
// question();