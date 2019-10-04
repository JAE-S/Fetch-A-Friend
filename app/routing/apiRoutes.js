
  // ========================================================== //
 //                         API ROUTES                         //
// ========================================================== //

// Requires friends.js file
// =========================================================
var friends = require("../data/friends.js");

var totalDifference = 0;
// Best match 
var bestMatchID = 0; 
var bestScore = 30; 


// Routes
// =========================================================
module.exports = (app) => {

    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", (req, res) => {
  
      res.json(friends); 
    });

    // Handles incoming survey results.
    app.post("/api/friends", (req, res) => {
       var newPawfile = req.body; 
        console.log(newPawfile);

        ///  Handles the compatibility logic.  \\\
        
        // Creates a new array with the current score
        // var currentScore = req.body.scores; 
        // console.log(currentScore)

    
      
        matches(req.body) 

        friends.push(newPawfile)
        console.log(friends[bestMatchID].first_name)

        res.send({
            first_name: friends[bestMatchID].first_name,
            photo: friends[bestMatchID].photo, 

            user_name: req.body.first_name,
            user_pic: req.body.photo,
        })

    
    })
    // console.log(friends.length)

}
function matches(addMatch){
    // Loops through current pawfiles
    for (var i = 0; i < friends.length; i++){
        totalDifference = 0;
        // Loops through currentScore array
        for (var x = 0; x < friends[i].scores.length; x++){
            // Math.abs calculates the results as positive numbers 
            totalDifference += Math.abs(addMatch.scores[x] - friends[i].scores[x]);
        }
        if (x === 10 && totalDifference < bestScore){
            bestScore = totalDifference; 
            bestMatchID = i; 
            // console.log("you are a match" + bestMatchID)
        }
    }
} 