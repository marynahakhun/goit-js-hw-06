const form = {
    input : document.querySelector('#name-input'),
    title: document.querySelector('h1'),
    textToChange: document.querySelector('#name-output')
};

form.input.addEventListener('input', onInputChange);


function onInputChange(event){
    form.textToChange.textContent = event.currentTarget.value;
}