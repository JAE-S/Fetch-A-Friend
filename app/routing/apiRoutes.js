
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
        res.json(newPawfile);
    
    })
    // console.log(friends.length)

    // handle the compatibility logic.

}
