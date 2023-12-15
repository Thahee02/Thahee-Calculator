const inputEl = document.querySelector('input');
const inputEqulEl = document.querySelector('#input-equal');

function displayValue(val){
    inputEqulEl.textContent = '';
    inputEl.value = inputEl.value + val;
}

function clearValue(){
    inputEqulEl.textContent = '';
    inputEl.value = "";

}

function calculate(){
    if(inputEl.value == ""){
        inputEl.value = 0;
    }
    else{
        inputEqulEl.textContent = '=';
        inputEl.value = eval(inputEl.value);
    }
    

}