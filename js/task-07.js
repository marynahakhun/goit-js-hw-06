
    const input = document.querySelector('#font-size-control')

    const span = document.querySelector('#text')

    input.addEventListener('click', toChangeFontSize);

    function toChangeFontSize () {

console.log(input.value)
const fontSize = input.value +'px';
span.style.fontSize = fontSize;
    }