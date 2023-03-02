


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
        
