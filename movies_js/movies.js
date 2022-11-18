searchbox.addEventListener('keyup', (event) => {
    if (event.code === 'Enter'){searchmovies();}
});
searchbtn.addEventListener('click', searchmovies);
function searchmovies() {
    var browising = "/search/movie"
    let searching = document.getElementById("searching");
    let headofsearch = document.getElementById("heading1");
    onsearch(browising, searching, headofsearch);
}
window.addEventListener('load',movies)
function movies(){
    upcomingmovies();
    top_ratedmovies();
    popularmovies();
    now_playingmovies();
}

function upcomingmovies() {
    console.log("bala hauno")
    var browising = "/movie/upcoming";
    let upcoming = document.getElementById("upcoming");
    let headofsearch = document.getElementById("heading2");
    onsearch(browising,upcoming,headofsearch);
}

function top_ratedmovies() {
    console.log("bala hauno")
    var browising = "/movie/top_rated";
    let upcoming = document.getElementById("top_rated");
    let headofsearch = document.getElementById("heading3");
    onsearch(browising,upcoming,headofsearch);
}

function popularmovies() {
    console.log("bala hauno")
    var browising = "/movie/popular";
    let upcoming = document.getElementById("popular");
    let headofsearch = document.getElementById("heading4");
    onsearch(browising,upcoming,headofsearch);
}

function now_playingmovies() {
    console.log("bala hauno")
    var browising = "/movie/now_playing";
    let upcoming = document.getElementById("now_playing");
    let headofsearch = document.getElementById("heading5");
    onsearch(browising,upcoming,headofsearch);
}