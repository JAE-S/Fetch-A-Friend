
  // ========================================================== //
 //                         API ROUTES                         //
// ========================================================== //

// Requires friends.js file
// =========================================================
var friends = require("../data/friends.js");

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
        var currentScore = req.body.scores; 
        console.log(currentScore)

        var compareScores = [];
        // Best match 
        // var match = 0; 

        // Loops through current pawfiles
        for (var i = 0; i < friends.length; i++){
            var totalDifference = 0;
            // Loops through currentScore array
            for (x = 0; x < currentScore.length; x++){
                // Math.abs calculates the results as positive numbers 
                totalDifference += Math.abs(currentScore[x] - friends[i].scores[x]);
            }
            // Pushes the difference between each member and pushes the results to the compare scores array 
            compareScores.push(totalDifference);
            console.log(totalDifference)
        }

        friends.push(newPawfile)
        res.json(newPawfile);
    
    })
    // console.log(friends.length)

}
