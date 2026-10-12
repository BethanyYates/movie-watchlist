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
    movies: [],

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
    // TODO: Step 3
}

// Handle form submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // TODO: Step 5
});

// Load and display saved movies
loadMovies();
renderMovies();