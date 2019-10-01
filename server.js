
  // ========================================================== //
 //                       S E R V E R                          //
// ========================================================== //

// Dependencies
// =========================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =========================================================
var app = express();

// port for Heroku
var PORT = process.env.PORT || 3000;

// Serves static content from the "public" directory into the application directory.
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and provides the server with access
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts the server -- listening
// =========================================================
app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
  