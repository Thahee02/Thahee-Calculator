const inputEl = document.querySelector('input');

function displayValue(val){
    inputEl.value = inputEl.value + val;
}

function clearValue(){
    inputEl.value = "";

}

function calculate(){
    if(inputEl.value == ""){
        inputEl.value = 0;
    }
    else{
        inputEl.value = eval(inputEl.value);
    }
    

}