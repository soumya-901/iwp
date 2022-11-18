let searchbtn = document.getElementById("searchbtn");
let searchbox = document.getElementById("searchbox");
let searchcontain = document.getElementById("resultContainer");
const MY_API_KEY = "bb3321afdc406b87ef3bce560d9f5bd9";
//  Getting from the web https://www.themoviedb.org/settings/api
const MY_URL = "https://api.themoviedb.org/3";
const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
function onsearch(type, imagebox, head) {
    const url = `${MY_URL}${type}?api_key=${MY_API_KEY}&query=${searchbox.value}`
    fetch(url)
        .then((result) => {
            return result.json();
        })
        .then(getmovies)
        .then((image) => {
            console.log(image.head)
            head.innerText = image.head;
            console.log(image.images)
            imagebox.innerHTML = image.images;
        })
        .catch((error) => {
            console.log(error)
            let heading = document.getElementById('heading');
            heading.innerText = "No match found";
        })
}

function getmovies(err) {

    if (err.results.length === 0) {
        var headingEle = "No match found";
        return {
            images: getImage(err.results),
            head: headingEle
        };
    }
    else {
        var headingEle2 = "Results";
        return {
            images: getImage(err.results),
            head: headingEle2
        };
    }
}
function getImage(image) {
    var imagebox = "";
    for (let j = 0; j < image.length; j++) {
        if (image[j].poster_path) {
            imagebox +=
                `<section>
             <img src=${MOVIE_DB_IMAGE_ENDPOINT}${image[j].poster_path} data-movie-id ="${image[j].id}" data-video="${image[j].video}" alt="check your internet connection">
             </section>`
        }
    }
    return imagebox;
}

document.onclick=function(event){
    const target = event.target;
    if(target.tagName.toLowerCase()==="img"){
        console.log(event)
        var MOVIE_ID= target.dataset.movieId;
        console.log(MOVIE_ID)
        localStorage.setItem("MovieId", MOVIE_ID);
        open('../movies_html/singlemovie.html',"__self__")
        console.log("you clicked the right button")
    }
    if(target.tagName.toLowerCase()==="span"){
        open('../movies_html/catagorymovies.html',"__blank__")
    }

}
// console.log("plz work it")
