// const form = {
//     input : document.querySelector('#name-input'),
//     title: document.querySelector('h1'),
//     textToChange: document.querySelector('#name-output')
// };

// form.input.addEventListener('input', onInputChange);


// function onInputChange(event){
//     form.textToChange.textContent = event.currentTarget.value;
// }

{/* <input
      type="text"
      id="validation-input"
      data-length="6"
      placeholder="Please enter 6 symbols"
    // /> */}



    const input = document.querySelector('#validation-input')
        
    

    input.addEventListener('focus', onInputFocus)

    input.addEventListener('blur', onInputBlur)


    function onInputFocus (){

console.log('событие фокус')

    };

    function onInputBlur (event){
        console.log('событие блюр')
console.log('input.length',event.currentTarget.value.length)
console.log('valid.length', input.dataset.length)
        if ((Number(input.dataset.length)) === event.currentTarget.value.length )  {
            input.classList.add('valid') ;
            input.classList.remove('invalid');
            
            
        } else {
            input.classList.add('invalid') ;
            input.classList.remove('valid');
            
        }
        
    };
        
