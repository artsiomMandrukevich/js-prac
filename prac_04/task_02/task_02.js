/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/indent */
var Genre;
(function (Genre) {
    Genre["Drama"] = "drama";
    Genre["Comedy"] = "comedy";
    Genre["Action"] = "action";
    Genre["Horor"] = "horor";
})(Genre || (Genre = {}));
class Movie {
    title;
    director;
    year;
    genre;
    constructor(title, director, year, genre) {
        Movie._checkYear(year);
        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
    }
    getMovieInfo() {
        console.log('Title: ' + this.title + ', director: ' + this.director + ', year:' + this.year + ', genre: ' + this.genre);
    }
    static _checkYear(year) {
        if (year < 1950 || year > 2030) {
            throw new Error('Year should be between 1950 and 2030');
        }
    }
}
class MovieCatalog {
    catalog = [];
    addMovie(movie) {
        this.catalog.push(movie);
    }
    searchMovieByTitle(title) {
        let movie;
        for (const item of this.catalog) {
            if (item.title === title) {
                movie = new Movie(item.title, item.director, item.year, item.genre);
            }
        }
        return movie;
    }
    getAllMovies() {
        return this.catalog;
    }
}
// Executive part
// create a few movie
const testMovie1 = new Movie('Alien', 'Ridli Scott', 1986, Genre.Horor);
const testMovie2 = new Movie('Terminator 2', 'James Cameron', 1991, Genre.Action);
// add movie into catalog
const movieCatalog = new MovieCatalog();
movieCatalog.addMovie(testMovie1);
movieCatalog.addMovie(testMovie2);
// search movie by title
const searchMovie = movieCatalog.searchMovieByTitle('Alien');
console.log('Movie');
console.log(searchMovie);
// search movie by title
const allMovie = movieCatalog.getAllMovies();
console.log('All movies');
console.log(allMovie);
