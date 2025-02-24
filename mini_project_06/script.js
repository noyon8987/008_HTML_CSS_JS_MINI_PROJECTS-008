let body = document.getElementById('body');
let redBtn = document.getElementById('redBtn')
let greenBtn = document.getElementById('greenBtn')
let blueBtn = document.getElementById('blueBtn')
let pinkBtn= document.getElementById('pinkBtn')
let purpleBtn = document.getElementById('purpleBtn')

redBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#db5f5f';
})

greenBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#67e085';
})

blueBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#54bae9';
})

pinkBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#f04d70';
})

purpleBtn.addEventListener('click', () => {
    body.style.backgroundColor = '#c74bec';
})