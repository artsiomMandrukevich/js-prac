/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/indent */

enum Genre {
    Drama = 'drama',
    Comedy = 'comedy',
    Action = 'action',
    Horor = 'horor'
}

class Movie {
    title: string;
    director: string;
    year: number;
    genre: Genre;

    constructor (title: string, director: string, year: number, genre: Genre) {
        Movie._checkYear(year);

        this.title = title;
        this.director = director;
        this.year = year;
        this.genre = genre;
    }

    getMovieInfo (): void {
        console.log('Title: ' + this.title + ', director: ' + this.director + ', year:' + this.year + ', genre: ' + this.genre)
    }

    static _checkYear (year: number): void {
        if (year < 1950 || year > 2030) {
            throw new Error('Year should be between 1950 and 2030')
        }
    }
}

class MovieCatalog {
    catalog: Movie[] = []

    addMovie (movie: Movie): void {
        this.catalog.push(movie);
    }

    searchMovieByTitle (title: string): Movie {
        let movie;
        for (const item of this.catalog) {
            if (item.title === title) {
                movie = new Movie(item.title, item.director, item.year, item.genre)
            }
        }
        return movie;
    }

    getAllMovies (): Movie[] {
        return this.catalog
    }
}

// Executive part
// create a few movies
const testMovie1 = new Movie('Alien', 'Ridli Scott', 1986, Genre.Horor)
const testMovie2 = new Movie('Terminator 2', 'James Cameron', 1991, Genre.Action)

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
