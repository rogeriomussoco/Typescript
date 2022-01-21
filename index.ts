import { question } from "readline-sync";

type Operator = '+'|'-'|'*'|'/';



function main():void

{
    const primStr: string = question('Insira o primeiro numero:\n');
    const operator :string=question('Insira o operador:\n');
    const segString:string=question('Insira o segundo numero:\n');
    //console.log('primStr');

    const validInput : boolean = isNumber(primStr) && isOperador(operator) && isNumber(segString);
    console.log(validInput);

        if (validInput)
        {    //console.log('isvalid.')
            const firstNum: number = parseInt(primStr);
            const secondNum:number = parseInt(segString);
            const resultado =calculate(firstNum, operator as Operator, secondNum);
            console.log(resultado)
        }
        else
        {
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

function calculate(firstNum: number, operator: Operator, secondNum: number)
{
        switch(operator)
        {
            case '+':
                return firstNum+secondNum;
                
            case '-':
                return firstNum - secondNum;

            case '*':
                return firstNum*secondNum;
            case '/':
                return firstNum/secondNum;

                
        }
}

function isOperador(operator:string):boolean
{
    switch(operator)
    
    {
    
    case '+':
    case '-':
    case '*':
    case '/':
        return true;
    
    default:
         return false;
    }
    

}


function isNumber(str:string) :boolean
{
    const maybeNum = parseInt(str);
    const isNum: boolean= Boolean(!isNaN(maybeNum));
    return isNum;
}


main();