// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

var friends = require("./../data/friend.js")
  
  module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
      });
      
    
    app.post("/api/friends", function(req, res) {
      var users = req.body;
       console.log(users);
    //    return res.json(friends);
        // var newfriends = req.body;
        // newfriends.toString();
        // friends.push(newfriends);
        // res.json(newfriends);
      });
  };
