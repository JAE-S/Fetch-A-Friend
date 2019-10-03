
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
        var bestMatch; 
       

        // Loops through current pawfiles
        for (var i = 0; i < friends.length; i++){
            var totalDifference = 0;
            var minDifference = -1;
            // Loops through currentScore array
            for (x = 0; x < currentScore.length; x++){
                // Math.abs calculates the results as positive numbers 
                totalDifference += Math.abs(currentScore[x] - friends[i].scores[x]);
            }
            if (minDifference < 0 || totalDifference < minDifference ){
                minDifference = totalDifference
                bestMatch = friends[i].first_name; 
            }
          
           
        }
    
        console.log("Your best match is: " + bestMatch)
        friends.push(newPawfile)
        res.json(newPawfile[bestMatch]);
    
    })
    // console.log(friends.length)

}
