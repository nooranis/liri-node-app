/*
step 4:
code to grab data from keys.js
store keys in a variable

step 5:
add following commands in (switch statement? look at bank.js from 10.2 as reference)
my-tweets
spotify-this-song
movie-this
do-what-it-says
*/

// ========================= variables ================================= //
var action = progress.argv[2]; // add case from switch statement by user 
var input = progress.argv[3]; // used for spotify && movies, added by user
var movie = JSON.parse(body) // for movie();
var fs = require('fs');  // for doThis(); 
var music = require('spotify-web-api-node'); // for spotify();  

// ========================= npm packages =============================== //
var request = require('request'); // movies

// =========================== switch ================================ //

switch(action) = {
case 'my-tweets':
	tweets(); 
break;

case 'spotify-this-song' :
	spotify();
break;

case 'movie-this' :
	movie();
break;

case 'do-what-it-says' :
	doThis();
break;
}

// ========================= functions ================================= //

tweets() {
// run following cmd: node liri.js my-tweets
// shows last 20 tweets: content + timestamp
// i don't twitter, so there are only a few 
	var Twitter = require('twitter');
 	var client = new Twitter('./keys.js');

	var params = {screen_name: 'XurmomsmomX'};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
  			if (!error) {
    		console.log(tweets);
  		}
	});

	}

spotify() {
// run following cmd: node liri.js <song name>
// use var input for progress.argv[3]
// https://www.npmjs.com/package/spotify-web-api-node
// will display the following:
	// artist
	// song name
	// preview link of song from Spotify
	// albumn song is from
	// if no song is provided || invalid song:
		// default info:
			// The Sign - Ace of Base
	music.searchTracks(input)
	  .then(function(data) {
    		console.log("You searched: " + input, data.body);
	  }, function(err) {
    		console.error(); // Ace of Base song 
  });
 		

}

movie() {
// run following cmd: node liri.js <movie name>
// use var input for progress.argv[3]
// display the following:
	// title
	// year
	// IMDB rating
	// country movie was produced
	// language of movie
	// plot
	// actors
	// rotten tomatoes rating
	// rotten tomatoes URL
// if no movie || invalid movie
	// Mr.Nobody

	request('http://www.omdbapi.com/?t=' + input + '&y=&plot=short&r=json', function(error, response, body) {
			if (!error && response.statusCode == 200) {
// NEED TO ADD ROTTEN TOMATOES STUFF!!!!!!! Additional URL in request() ???????????
	
				console.log("TItle: " + movie["Title"]);
				console.log("Year: " + movie["Year"]);
				console.log("IMDB rating: " + movie["imdbRating"]);
				console.log("Country produced: " + movie["Country"]);
				console.log("Language: " + movie["Language"]); 
				console.log("Plot: " + movie["Plot"]); 
				console.log("Actors: " + movie["Actors"])

			} else if (error) {
				console.log(); // <<< Mr.Nobody stuff
}
// make multiple requests and turn them into variables at top.
	// movie() function will have an if/else statement
		// if movie = true
			// console.log(valid OMDB variable)
			// console.log(valid RottenTomatoes variable)
		// else
			// console.log(invalid OMDB variable)
			// console.log(invalid RottenTomatoes variable)
// OR maybe setup each request as a function and then call the function based on input var?
	// valid() {
		// parsed data from selected movie
	//}
	// invalid() {
		// mr.nobody data 
	//}

	// if (input == true)
		// valid();
	// else
		// invalid();
}
}

doThis() {
// use 'fs' npm package
// will take text from random.txt
		console.log("./random.txt"); 
	}

}