let quote = document.getElementById("quote")
let author = document.getElementById("author")

const api_url = "https://api.quotable.io/random"
let getquote = async (url) =>{
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getquote(api_url);


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " ---- by" + author.innerHTML,
    "Tweet Window" , "width = 600 , height =300")
}