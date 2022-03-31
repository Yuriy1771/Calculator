const enterArea = document.querySelector('.enterArea');
let expression = '';

function press(num) {
    expression += num;
    enterArea.value = expression;
}

function exactly() {
    enterArea.value = eval(expression);
    expression = '';
}

function clean() {
    expression = '';
    enterArea.value = expression;
}