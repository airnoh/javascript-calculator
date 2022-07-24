const userInput = document.getElementById('userInput');
var expression = '';

function press(val){
    expression += val;
    userInput.value = expression;
}
function equal(val){
    userInput.value = eval(expression);
    expression= '';
}
function erase(){
    expression = '';
    userInput.value = expression
}