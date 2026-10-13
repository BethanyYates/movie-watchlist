Movie Watchlist Project

GitHub Repository:
https://github.com/BethanyYates/movie-watchlist.git

Project Description:
The Movie Watchlist is a webpage that allows users to keep track of movies they want to watch. Users can add movies by entering a title and selecting a genre. They can also mark movies as watched or unwatched and remove movies from their list.

Movie Properties:
Each movie is stored as an object inside an array called movies. Each movie has three properties:
title: Stores the name of the movie.
genre: Stores the movie's selected genre.
watched: Stores a Boolean value that indicates whether the movie has been watched. New movies start with a value of false.

Watchlist Methods:
The watchlist object contains two methods. The toggleWatched(index) method switches a movie's watched status between true and false. The removeMovie(index) method removes a specific movie from the array.

Saving and Loading:
The saveMovies() function uses JSON.stringify() to convert the movie array into a JSON string and saves it using localStorage.
The loadMovies() function retrieves the saved data and uses JSON.parse() to convert it back into an array. It also includes a null check and try...catch to handle missing or invalid saved data.
This allows users to refresh or close the webpage without losing their saved movies and watched statuses.

Technologies Used:
HTML
CSS
JavaScript
Browser localStorage