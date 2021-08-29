
let numberButtons =  document.querySelectorAll('.calc-num')
let operatorButtons = document.querySelectorAll('.calc-op')
let decPointButton = document.getElementById('dec-btn')
let equalButton = document.getElementById('eq-btn')
let displayResult = document.getElementById('result')
let displayOperator = document.getElementById('operator-display')
let acBtn = document.getElementById('ac-btn')


let firstNumber = '';
let secondNumber = '';
let operator = '';

let isDecimal = false;
let stringDecimal;

equalButton.addEventListener('click', equalClick)
acBtn.addEventListener('click', acClick);
decPointButton.addEventListener('click', deciClick)

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
           
        
        case '-': 
            return a-b;
            
        
        case '*':
            return a*b;
            
        
        case '%':
            if(b==0){
                alert("dont divide by 0 little bastard!")
                break;
            }
            return  Math.round((a/b)*100000)/100000;
                   
    }

 
}   


function handleNumClick(e){

    

  
    if(!firstNumber){
        firstNumber = parseFloat(e.target.innerHTML)
        displayResult.textContent = `${firstNumber}`
    }

    else   if(firstNumber&& (operator!=='')&&!secondNumber){
        secondNumber = parseFloat(e.target.innerHTML)
        displayResult.textContent = `${secondNumber}`
    }
    else if(firstNumber&&!secondNumber){
        firstNumber = parseFloat(`${firstNumber}` + `${e.target.innerHTML}`)
        displayResult.textContent = `${firstNumber}`
    }
    else if(firstNumber&&secondNumber){
        secondNumber = parseFloat(`${secondNumber}` + `${e.target.innerHTML}`)
        displayResult.textContent = `${secondNumber}`
    }
  
    
}


function handleOpClick(e){

    if(firstNumber&&secondNumber){
        equalClick();
        firstNumber = resultCalc(operator, firstNumber, secondNumber)
        secondNumber = 0;
        operator = e.target.innerHTML;
        displayOperator.textContent = operator;
       
    }
   
    operator = e.target.innerHTML;
    displayOperator.textContent = operator

   
}

function equalClick(){
    displayResult.textContent = `${resultCalc(operator, firstNumber, secondNumber)}`
    displayOperator.textContent = ''

    if(firstNumber&&!secondNumber){
        displayResult.textContent = firstNumber
    }
}

function acClick(){
    firstNumber = ''
    secondNumber = ''
    operator = ''
    displayResult.textContent = '0'
    displayOperator.textContent = ''
}

function deciClick(){
    if(isDecimal){
        break;   
    }

    if(firstNumber &&!isDecimal){
        isDecimal = true;
        StringDecimal = firstNumber.toString() + '.'
        displayResult.textContent = StringDecimal;

    }
  
   
  
}