// Class Exercise Solution: Movie Sorter
let movies = [
    { title: "The Dark Knight", year: 2008 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "Inception", year: 2010 }
];

movies.sort((a, b) => a.year - b.year);

movies.forEach(movie => {
    console.log(movie.title + " (" + movie.year + ")");
});
