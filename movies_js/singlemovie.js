console.log("i am working properly")
console.log(MY_API_KEY)
var movieId = localStorage.getItem("MovieId");
console.log(movieId);
url = `${MY_URL}/movie/${movieId}?api_key=${MY_API_KEY}`
fetch(url)
.then((responce)=>{
    responce.json();
})
.then()