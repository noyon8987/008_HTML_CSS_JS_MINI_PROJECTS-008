let count = document.querySelector('.count');
let decrement = document.querySelector('.decrement');
let increment = document.querySelector('.increment');
let changBy = document.querySelector('.changValue');
let reset = document.querySelector('.reset');

decrement.addEventListener('click', function() {
    let countValue = parseInt(count.innerHTML);
    let changValue = parseInt(changBy.value)
    count.innerHTML = countValue - changValue;
})

increment.addEventListener('click', function() {
    let countValue = parseInt(count.innerHTML);
    let changValue = parseInt(changBy.value)
    count.innerHTML = countValue + changValue;
})

reset.addEventListener('click', function() {
    count.innerHTML = 0;
    changBy.value = 1;
})