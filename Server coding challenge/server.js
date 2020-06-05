const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );
const errorHandler = require("./middleware/errorHandler")
const {movies} = require("./models/movie-model")

const app = express();

/*Your code goes here*/

app.patch('/api/remove-movie-actor/:movie_ID', jsonParser, errorHandler, (req, res) => {
    let movie_ID = req.params.movie_ID;
    let {firstName, lastName } = req.body;

    let movie = {};

    if(firstName && lastName) {
        movie.actors = firstName + lastName;
    }

    return movies.removeActorfromMovieList(movie_ID, movie)
    .then(removeActorfromMovieList => {
        if(removeActorfromMovieList) {
            res.statusMessage = "Actor removed correctly";
            return res.status(201).json(removedActor)
        }
    })
    .catch(err => {return res.status(201).json(removedActor)})
})

app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});