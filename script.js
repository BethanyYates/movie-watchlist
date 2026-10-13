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

    // Switch between watched and not watched
    toggleWatched(index) {
        this.movies[index].watched =
            !this.movies[index].watched;
    },

    // Remove a movie from the array
    removeMovie(index) {
        this.movies.splice(index, 1);
    }
};

// Step 6: Save movies to localStorage
function saveMovies() {
    localStorage.setItem(
        "movieWatchlist",
        JSON.stringify(watchlist.movies)
    );
}

// Step 6: Load movies from localStorage
function loadMovies() {
    try {
        // Get saved movies from localStorage
        const savedMovies =
            localStorage.getItem("movieWatchlist");

        // Check if saved data exists
        if (savedMovies !== null) {
            // Convert the JSON string into an array
            const parsedMovies = JSON.parse(savedMovies);

            // Make sure the saved data is an array
            if (Array.isArray(parsedMovies)) {
                watchlist.movies = parsedMovies;
            }
        }
    } catch (error) {
        console.error("Error loading movies:", error);
        watchlist.movies = [];
    }
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

// Step 5: Handle form submission
form.addEventListener("submit", (event) => {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the movie title and selected genre
    const title = titleInput.value.trim();
    const genre = genreSelect.value;

    // Clear any previous error messages
    message.textContent = "";

    // Check if the movie title is blank
    if (title === "") {
        message.textContent = "Enter a movie title.";
        return;
    }

    // Check if a genre has been selected
    if (genre === "") {
        message.textContent = "Choose a genre.";
        return;
    }

    // Create a new movie object
    const newMovie = {
        title: title,
        genre: genre,
        watched: false
    };

    // Add the movie to the watchlist array
    watchlist.movies.push(newMovie);

    // Save the updated movie list
    saveMovies();

    // Display the updated movie list
    renderMovies();

    // Clear the movie title input
    titleInput.value = "";

    // Reset the genre dropdown
    genreSelect.value = "";

    // Reset the form
    form.reset();

    // Show success message
    message.textContent =
        "Movie added to your watchlist!";
});

// Load and display saved movies
loadMovies();
renderMovies();