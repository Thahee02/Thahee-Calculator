const inputEl = document.querySelector('input');

function displayValue(val){
    inputEl.value = inputEl.value + val;
}

function clearValue(){
    inputEl.value = "";

}

function calculate(){
    inputEl.value = '=' + eval(inputEl.value);

}