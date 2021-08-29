const calcNumbers = document.querySelectorAll(".calc-num")
const calcOperators = document.querySelectorAll(".calc-op")
const equalBtn = document.getElementById('eq-btn')
let mainDisplay = document.getElementById('current-display')
const opDisplay = document.getElementById('operator-display')
const acBtn = document.getElementById('ac-btn')
const delBtn = document.getElementById('del-btn')


acBtn.addEventListener('click', acClick)
equalBtn.addEventListener('click', equalsClick)
delBtn.addEventListener('click', delClick)



calcNumbers.forEach(btn =>{
    btn.addEventListener('click', appendNumber)
})

calcOperators.forEach(btn =>{
    btn.addEventListener('click', appendOperator)
})



let firstOperand = ''
let secondOperand = ''
let operator = ''
let finalResult = 0

function finalCalc(first, second, op){
    switch(op)
    {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '%':
            if(second==0){
                alert('cant divide by 0 bastard!')
                return 0;
            }
                
                return first/second;
            
           
    }




}

function appendNumber(e){
    if(e.target.innerHTML =='.' && mainDisplay.textContent.includes('.')){
        return;
    }
    if(operator!=='' &&firstOperand && !secondOperand){
        mainDisplay.textContent = ''
        secondOperand = e.target.innerHTML
        mainDisplay.textContent = e.target.innerHTML
    }

    else if(mainDisplay.textContent == '0' && mainDisplay.textContent.length==1){
        mainDisplay.textContent = e.target.innerHTML;
    }
    else {
        mainDisplay.textContent += e.target.innerHTML;
    }   
    

}


function appendOperator(e){
    if(!firstOperand){
        firstOperand = parseFloat(mainDisplay.textContent)

    }
    if(firstOperand&&secondOperand){
        equalsClick()
    }
   
    operator = e.target.innerHTML;
    opDisplay.textContent = operator;
    
}

function equalsClick(){
    if(!operator||!secondOperand){
        finalResult = firstOperand
    }
    else{
        secondOperand = parseFloat(mainDisplay.textContent)
        finalResult = finalCalc(firstOperand, secondOperand, operator)
        mainDisplay.textContent = `${finalResult}`
        firstOperand = finalResult;
        secondOperand = 0
    }
 
}

function acClick(){
    firstOperand = ''
    secondOperand = ''
    operator = ''
    mainDisplay.textContent = '0'
    opDisplay.textContent = ''
}

function delClick(){
    if(mainDisplay.textContent.length==1){
        mainDisplay.textContent = '0';
    }
    else{
        mainDisplay.textContent = mainDisplay.textContent.slice(0, mainDisplay.textContent.length-1)
    }

}







