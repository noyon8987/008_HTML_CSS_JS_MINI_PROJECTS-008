const quote = document.getElementById('quote');
const author = document.getElementById('author');
const generatorBtn = document.getElementById('generatorBtn');

const Api = "https://api.api-ninjas.com/v1/quotes?category=attitude"
const ApiKey = "HkjQ/9ayYro6MylzsNqgsw==aLs7Yju6ah2FYswc"

const getquote = () => {
    fetch(Api, {
        headers:
        {
            'X-Api-Key': ApiKey
        }
    })
    .then (data => data.json())
    .then (item => {
        quote.innerText = item[0].quote
        author.innerText = item[0].author
    })
}
getquote();

generatorBtn.addEventListener('click', getquote)