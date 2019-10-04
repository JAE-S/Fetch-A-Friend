
  // ========================================================== //
 //                        HTML ROUTES                         //
// ========================================================== //

// 'path' node package
// =========================================================
var path = require('path')

// Routes
// =========================================================
module.exports = (app) => {
      // Route to /survey => displays the survey page
      app.get("/survey", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/survey.html"));
          
      });

      app.get("/countessdroolsbury", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/assets/images/countess_drooslbury.jpg"));
          
      });

       // 'catch-all' Route to all browser extension except /survey and /api/friends => displays the home page
      app.get("*", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/home.html"));
          
      });
    }
