"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var primStr = (0, readline_sync_1.question)('Insira o primeiro numero:\n');
    var operator = (0, readline_sync_1.question)('Insira o operador:\n');
    var segString = (0, readline_sync_1.question)('Insira o segundo numero:\n');
    //console.log('primStr');
    var validInput = isNumber(primStr) && isOperador(operator) && isNumber(segString);
    console.log(validInput);
    if (validInput) { //console.log('isvalid.')
        var firstNum = parseInt(primStr);
        var secondNum = parseInt(segString);
        var resultado = calculate(firstNum, operator, secondNum);
        console.log(resultado);
    }
    else {
        console.log('\ninvalid input\n');
        main();
    }
    //console.log (primString, operador, segString);
    //const firstNum = isNumber(primStr);
    //console.log(firstNum);
    //const op = eOperador(operador)
    //console.log(op);
    //const validInput:boolean = isNumber
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
function isOperador(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = Boolean(!isNaN(maybeNum));
    return isNum;
}
main();
