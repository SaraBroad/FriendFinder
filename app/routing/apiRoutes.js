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
      var newFriend = req.body;
      var friendMatch = {
        name: "",
        photo: "",
        scoreDiff: 100
      };

      for (var i = 0; i < friends.length; i++) {
          totalDifference = 0;
            for (var j = 0; j < newFriend.scores.length; j++) {
              totalDifference += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
                if (totalDifference <= friendMatch.scoreDiff) {
                    friendMatch.name = friends[i].name;
					          friendMatch.photo = friends[i].photo;
				          	friendMatch.scoreDiff = totalDifference;
                }
            }
      }

      friends.push(newFriend)

      //loop through user scores
      //loop through friends scores
      //friends - user scores


       res.json(friendMatch);
        // var newfriends = req.body;
        // newfriends.toString();
        // friends.push(newfriends);
        // res.json(newfriends);
      });
  };
