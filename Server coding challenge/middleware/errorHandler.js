function errorHandler(req, res) {
    /* Your code goes here*/

    let id = req.body.id;
    let movie_ID = req.params.movie_ID;
    let {firstName, lastName} = req.body;

    if(!id) {
        res.statusMessage = "Id missing in the body of the request";
        return res.status(406).end();
    }

    if(id !== movie_ID) {
        res.statusMessage = "Id and movie_ID do not match";
        return res.status(409).end();
    }
    
    if(!firstName || !lastName) {
        res.statusMessage = "You need to send both firstName and lastName of the actor to remove from the movie list";
        return res.status(403).end();
    }

    if(!!firstName || !lastName || !movie_ID) {
        res.statusMessage = "The actor or movie do not exist";
        return res.status(406).end();
    }
}

module.exports = errorHandler;