function getPasswordChecker(password){
    //Функция, которая возвращает другую функцию с переменной password инициализированной в момент создания функции
    return function checkPass(pass){
        return ( password === pass ) ;
    }
}

//Создадим функции с разными паролями
const myFunctionPassCheck1 = getPasswordChecker("123456")
const myFunctionPassCheck2 = getPasswordChecker("654321")

//Проверяем
console.log( myFunctionPassCheck1("123456") )
console.log( myFunctionPassCheck2("123456") )

console.log( myFunctionPassCheck1("654321") )
console.log( myFunctionPassCheck2("654321") )