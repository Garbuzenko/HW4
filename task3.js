const rl = require('readline').createInterface(process.stdin, process.stdout);

function question(){
    rl.question('Введите число от 0 до 999', (numberFromUser) => {
        question();
        // return numberFromUser
    })
}

async function input() {
    while (true) {
        const data = await question('Введите что-нибудь:');
        console.log('Вы ввели', data);
        if (data === 'q'){
            rl.close();
            break;
        }
    }
}

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