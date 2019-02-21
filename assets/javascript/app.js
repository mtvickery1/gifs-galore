var movies = ["zoolander", "tommy boy", "pulp fiction", "harry potter"];

// For each item in the movies array
movies.forEach(function (movie) {
  // Create a buttom
  var button = $("<button class='btn btn-dark'>");
  // Replaces spaces with a dash -- for assigning ids
  movie = movie.replace(" ", "-");
  console.log('movie:', movie);
  // Gives button id equal to the name of the movie
  $(button).attr("id", movie);
  // Gives class to button
  $(button).addClass("movie-button");
  // Gives text to button
  $(button).text(movie);
  // Appends buttons to page
  $("#gif-buttons").append(button);
});

