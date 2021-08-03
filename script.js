
let numberButtons =  document.querySelectorAll('.calc-num')
let operatorButtons = document.querySelectorAll('.calc-op')
let equalButton = document.getElementById('eq-btn')
let displayResult = document.getElementById('result')


let firstNumber = '';
let secondNumber = '';
let operator = '';

equalButton.addEventListener('click', equalClick)


numberButtons.forEach(btn =>{
    btn.addEventListener('click', handleNumClick)
})
operatorButtons.forEach(btn =>{
    btn.addEventListener('click', handleOpClick)
})




function resultCalc(operator, a, b){
    switch(operator){
        case '+':
            return a+b;
            break;
        
        case '-': 
            return a-b;
            break;
        
        case '*':
            return a*b;
            break;
        
        case '%':
            return a/b;
            break;        
    }

 
}   


function handleNumClick(e){
    if(firstNumber == false){
        firstNumber = parseInt(e.target.innerHTML)
    }
    if(firstNumber&& (operator!=='')){
        secondNumber = parseInt(e.target.innerHTML)
    }
    
}


function handleOpClick(e){
    operator = e.target.innerHTML;
}

function equalClick(e){
    displayResult.textContent = `${resultCalc(operator, firstNumber, secondNumber)}`
}