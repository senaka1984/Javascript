const defaultResult = 0;
let currentResult = defaultResult;

function getuserInput()
{
   return +userInput.value;
}

function getDescription(operator, currentVal, inputValue)
{
    return `Result for ${currentVal} ${operator} ${inputValue}`;
}

function add(){
    let inputVal = getuserInput();
    const description = getDescription('+', currentResult ,inputVal);
    currentResult = +currentResult + inputVal;
    outputResult(currentResult,description);
}

function multiply(){
    let inputVal = getuserInput();
    const description = getDescription('*', currentResult ,inputVal);
    currentResult *=  inputVal;
    outputResult(currentResult,description);
}

function subtract(){
    let inputVal = getuserInput();
    const description = getDescription('-', currentResult ,inputVal);
    currentResult -= inputVal;
    outputResult(currentResult,description);
}

function divide(){
    let inputVal = getuserInput();
    const description = getDescription('/', currentResult ,inputVal);
    currentResult /= inputVal;
    outputResult(currentResult,description);
}




addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




