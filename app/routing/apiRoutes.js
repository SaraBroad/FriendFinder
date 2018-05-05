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


       res.json(friendMatch);
   
      });
  };
