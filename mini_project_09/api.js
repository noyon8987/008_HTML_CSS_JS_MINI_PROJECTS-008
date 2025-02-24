const Quotes = [
    {
        "title": "delectus aut autem",
        "desc": "laboriosam mollitia et enim quasi adipisci quia provident illum"
      },
      {
        "title": "quis ut nam facilis et officia qui",
        "desc": "Ratione doloremque quia maiores aut quia provident illum"
      },
      {
        "title": "Fugiat veniam minus",
        "desc": "laboriosam mollitia et enim quasi adipisci quia provident illum"
      },
      {
        "title": "et porro tempora",
        "desc": "Ratione doloremque quia maiores aut quia provident illum"
      },
      {
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "desc": "Ratione doloremque quia maiores aut quia provident illum"
        
      },
      {
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "desc": "laboriosam mollitia et enim quasi adipisci quia provident illum"
      },
      {
        "title": "illo expedita consequatur quia in",
        "desc": "Ratione doloremque quia maiores aut quia provident illum"
      },
      {
        "title": "quo adipisci enim quam ut ab",
        "desc": "laboriosam mollitia et enim quasi adipisci quia provident illum"
      },
      {
        "title": "molestiae perspiciatis ipsa",
        "desc": "laboriosam mollitia et enim quasi adipisci quia provident illum"
      },
      {
        "title": "illo est ratione doloremque quia maiores aut",
        "desc": "Hay Noyon How Are You?"
      }
]

const title = document.getElementById("quote");
const desc = document.getElementById("author");
const button = document.getElementById("generatorBtn");

const getQuotes = () => {
    let randomQuote = Math.floor(Math.random() * Quotes.length);
    title.innerText = Quotes[randomQuote].title;
    desc.innerText = Quotes[randomQuote].desc;
}
getQuotes();

button.addEventListener("click", getQuotes)