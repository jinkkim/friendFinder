var friends = require("../data/friends.js");


module.exports = function(app) {

    app.post("/api/friends", function (req, res) {
        var newfriend = req.body;
        friends.push(newfriend);
        res.json(newfriend)

    });
    
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
};