let counterValue = 0;
const counter = document.querySelector('#value');
const addListener = document.querySelector('[data-action="increment"]')
const removeListener = document.querySelector('[data-action="decrement"]')




addListener.addEventListener('click', () => {
	counterValue+=1;
	counter.textContent = counterValue;
})

removeListener.addEventListener('click',()=>{
    counterValue-=1;
    counter.textContent = counterValue;
})




