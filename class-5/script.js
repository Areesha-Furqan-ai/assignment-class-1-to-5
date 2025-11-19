const resultInput = document.getElementById('result');
let expression = '';

function appendNumber(number) {
    expression += number;
    resultInput.value = expression;
}

function appendOperator(operator) {
    if (expression === '' && operator !== '-') return;
    const lastChar = expression.slice(-1);
    if (['+', '-', '*', '/', '%'].includes(lastChar)) {
        expression = expression.slice(0, -1) + operator;
    } else {
        expression += operator;
    }
    resultInput.value = expression;
}

function clearResult() {
    expression = '';
    resultInput.value = '';
}

function deleteLast() {
    expression = expression.slice(0, -1);
    resultInput.value = expression;
}

function calculateResult() {
    try {
        const result = eval(expression);
        if (Number.isNaN(result) || !Number.isFinite(result)) {
            resultInput.value = 'Error';
        } else {
            resultInput.value = result;
        }
        expression = '';
    } catch (error) {
        resultInput.value = 'Error';
        expression = '';
    }
}