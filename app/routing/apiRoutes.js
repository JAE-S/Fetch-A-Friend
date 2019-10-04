
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
        friends.push(newPawfile)

        var bestMatch = getMatch(req.body) 
        // console.log("Index: " + bestMatch.index)
        // console.log("Total Difference: " + bestMatch.totalDifference)
        res.send({
            first_name: friends[bestMatch.index].first_name,
            photo: friends[bestMatch.index].photo, 

            user_name: req.body.first_name,
            user_pic: req.body.photo,
        })
    })
    // console.log(friends.length)

}


  // ========================================================== //
 //                  Get The Best Match Function               //
// ========================================================== //


function getMatch(userResponse){
    var bestMatch = {
        index: null, 
        totalDifference: null 
    }

    // Loops through current pawfiles
    for (var i = 0; i < (friends.length - 1); i++){
        var totalDifference = 0;
        // Loops through currentScore array
        for (var x = 0; x < friends[i].scores.length; x++){
            // Math.abs calculates the results as positive numbers 
            totalDifference += Math.abs(userResponse.scores[x] - friends[i].scores[x]);
        }
        // If the Best match index is null and this is the first friend checked ( Default match = first friend checked )
        if (bestMatch.index === null){
            // Updates the best match index
            bestMatch.index = i; 
            //Updates the total difference 
            bestMatch.totalDifference = totalDifference; 
            // console.log("bestMatch.totalDifference === :  " + bestMatch.totalDifference)
        }
        // Updates the Best Match index if the value is greater than -1 and the total difference of each iteration is less than the bestMatch.totalDifference 
        if (bestMatch.index > -1 && totalDifference < bestMatch.totalDifference) {
            bestMatch.index = i;
            bestMatch.totalDifference = totalDifference;
        }

    }
    console.log("best match: " + bestMatch )
    return bestMatch
} 