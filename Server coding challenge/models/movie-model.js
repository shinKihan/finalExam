const mongoose = require( 'mongoose' );

const moviesSchema = mongoose.Schema({
    movie_ID : {
        type : Number,
        unique : true,
        required : true
    },
    movie_title : {
        type : String,
        required : true
    },
    year :  {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    actors : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'actors',
        required : true
    }]
});

const moviesCollection = mongoose.model( 'movies', moviesSchema );

const Movies = {
    createMovie : function( newMovie ){
        return moviesCollection
                .create( newMovie )
                .then( createdMovie => {
                    return createdMovie;
                })
                .catch( err => {
                    throw new Error( err );
                });
    },
    /*Your code goes here*/
    getMovieById: function(movie_ID){
        let filter = {movie_ID: movie_ID}
        return moviesCollection.find(filter)
        .then(movies => movies)
        .catch(err => {return err})
    },

    removeActorfromMovieList : function(movie_ID, actor){
        return moviesCollection.findOneAndUpdate({
            movie_ID
        }, {
            $pop: {
                actors : actor
            }
        }, {
            newInfo : true
        })
        .populate("actors", "firstName lastName")
        .then(movie => movie)
    }
}

module.exports = {
    Movies
};

