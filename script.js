"use strict";

// Get HTML elements
const form = document.getElementById("movie-form");
const titleInput = document.getElementById("movie-title");
const genreSelect = document.getElementById("movie-genre");
const message = document.getElementById("form-message");
const movieList = document.getElementById("movie-list");
const emptyMessage = document.getElementById("empty-message");

// Watchlist object
const watchlist = {
    movies: [
        {
            title: "The Princess Bride",
            genre: "Adventure",
            watched: false
        }
    ],

    toggleWatched(index) {
        // TODO: Step 4
    },

    removeMovie(index) {
        // TODO: Step 4
    }
};

toggleWatched(index) {
    // TODO: Step 4
},

removeMovie(index) {
    // TODO: Step 4
}
};

// Save movies to localStorage
function saveMovies() {
    // TODO: Step 6
}

// Load movies from localStorage
function loadMovies() {
    // TODO: Step 6
}

// Display movies on the webpage
function renderMovies() {
    // Clear the current movie list
    movieList.replaceChildren();

    // Show a message if the list is empty
    if (watchlist.movies.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    // Hide the empty message when movies exist
    emptyMessage.style.display = "none";

    // Loop through the movie array
    watchlist.movies.forEach((movie, index) => {

        // Create a list item for each movie
        const card = document.createElement("li");

        // Create the movie title
        const title = document.createElement("h3");
        title.textContent = movie.title;

        // Create the genre and watched status
        const details = document.createElement("p");

        details.textContent =
            movie.genre + " · " +
            (movie.watched ? "Watched" : "Not watched");

        // Create the watched button
        const watchedButton = document.createElement("button");
        watchedButton.type = "button";

        watchedButton.textContent = movie.watched
            ? "Mark Unwatched"
            : "Mark Watched";

        // Connect the button to its movie
        watchedButton.addEventListener("click", () => {
            watchlist.toggleWatched(index);
            saveMovies();
            renderMovies();
        });

        // Create the remove button
        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.textContent = "Remove";

        // Connect the remove button to its movie
        removeButton.addEventListener("click", () => {
            watchlist.removeMovie(index);
            saveMovies();
            renderMovies();
        });

        // Add movie information and buttons to the card
        card.append(
            title,
            details,
            watchedButton,
            removeButton
        );

        // Add the card to the movie list
        movieList.append(card);
    });
}

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // TODO: Step 5
});

// Load and display saved movies
loadMovies();
renderMovies();