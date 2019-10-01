
  // ========================================================== //
 //                         API ROUTES                         //
// ========================================================== //

// Requires friends.js file
// =========================================================
var friends = require("../data/friends.js");

// Routes
// =========================================================
module.exports = (router) => {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    router.get("/api/friends", (req, res) => {
  
        return  res.json({friends}); 
    });

    router.post("/api/friends", (req, res) => {
        newFriend = req.body; 
        console.log(newFriend);
    
        return res.json(newFriend);
    
    })

}

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

