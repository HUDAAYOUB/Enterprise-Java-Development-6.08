// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director);
    const removeDuplicatesDirectors = [...new Set(directors)];
    console.log("After Remove Duplicates Directors", removeDuplicatesDirectors);
    return removeDuplicatesDirectors;
  }
  
  function getAllDirectors(moviesArray) {

    const directors =  moviesArray.map(element =>  element.director );
    return [...new Set(directors)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const spielbergDramas = moviesArray.filter((moviesArray) => {
      return (
        moviesArray.director === 'Steven Spielberg' &&  moviesArray.genre.includes('Drama')
      );
    });
  
    return spielbergDramas.length;
  }
  


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
      return 0;
    }
  
    const sumScores = moviesArray.reduce((accumulator, currentValue) => {
      if (typeof currentValue.score === 'number') {
        return accumulator + currentValue.score;
      }
      return accumulator;
    }, 0);
  
    const avg = sumScores / moviesArray.length;
    return parseFloat(avg.toFixed(2));
  }
  
  // Iteration 4: Drama movies - Get the average of Drama Movies
  function dramaMoviesScore(moviesArray) {

    if (!Array.isArray(moviesArray) || moviesArray.length === 0) {
        return 0;
      }
    
      const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    
      if (dramaMovies.length === 0) {
        return 0;
      }
    
      return scoresAverage(dramaMovies);
   
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    const orgnizeMovies = moviesArray.slice().sort((a, b) => {
      if (a.year === b.year) {
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
  
    return orgnizeMovies;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedTitles = moviesArray
      .map((moviesArray) => moviesArray.title)
      .sort()
      .slice(0, 20);
    return sortedTitles;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
