var number1 = document.getElementById('num_1');
var number2 = document.getElementById('num_2');
var operation = document.getElementById('operation');
var text = document.getElementById('result');

document.getElementById('btn').addEventListener('click', () => {
    switch(operation.value){
        case '+': text.innerText = 'Result: ' + (parseInt(number1.value)) + (parseInt(number2.value));
        break;
        case '-': text.innerText = 'Result: ' + (parseInt(number1.value)) - (parseInt(number2.value));
        break;
        case '*': text.innerText = 'Result: ' + (parseInt(number1.value)) * (parseInt(number2.value));
        break;
        case '/': text.innerText = 'Result: ' + (parseInt(number1.value)) / (parseInt(number2.value));
        break;
    }
})