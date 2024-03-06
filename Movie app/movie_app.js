document.addEventListener('DOMContentLoaded', function () { 
    fetchmovies(); 
}); 

function fetchmovies() { 
    const apiKey = ' http://www.omdbapi.com/?i=tt3896198&apikey=27f5875a'; 
    const MoviesGrid = document.getElementById('MoviesGrid');     
    MoviesGrid.innerHTML = '<p>Loading movies...</p>'; 
    const randomSearchTerms = ['movie']; 
    // a default search term (e.g., 'popular') 
    fetch(` ${apiKey}&s=${randomSearchTerms}`).then(response => response.json()) 
        .then(data => { 
            if (data.Search && data.Search.length > 0) { 
                moviestoshow(data.Search);  } 
                else 
                { MoviesGrid.innerHTML = '<p>No random movies found!</p>';  } 
        }) 
        .catch(error => { 
            MoviesGrid.innerHTML = '<p>Error fetching movies. Please try again later.</p>'; 
        }); 
} 

function moviestoshow(movies) { 
    const MoviesGrid = document. getElementById('MoviesGrid');  

    // Clear previous results 
    MoviesGrid.innerHTML = ''; 
    // Display each movie in the results 
    movies.forEach(movie => { 
        const movieCard = document.createElement('div'); 
        movieCard.classList.add('movie-card');           
        movieCard.innerHTML = ` <img src="${movie.Poster}" alt="${movie.Title}"> 
        
    <a  href="http://www.omdbapi.com/?i=tt3896198&apikey=27f5875a" target="_blank" >${movie.Title}</a> 
    <p>${movie.Year}</p>  `;    
      MoviesGrid.appendChild(movieCard); 
    }); 
} 

// this function is used for click button and search result
var input = document.getElementById("searchInput");
input.addEventListener("keydown",  function searchMovies() { 
    // const apiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=27f5875a'; 
    const searchInput = document.getElementById('searchInput').value; 
    const MoviesGrid = document.getElementById('MoviesGrid'); 
    if (searchInput.trim() !== '') {  
        MoviesGrid.innerHTML = '<p>Loading movies...</p>'; 
        fetch(` ${apiKey}&s=${searchInput}`).then(response => response.json()) 
            .then(data => { 
                console.log(data);
                if (data.Search ) { 
                    moviestoshow(data.Search); 
                } else { 
                    MoviesGrid.innerHTML =  '<p>No movies found with the given name!</p>'; 
                } 
            }) 
    } 
} );



