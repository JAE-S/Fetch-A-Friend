
  // ========================================================== //
 //                        HTML ROUTES                         //
// ========================================================== //

// 'path' node package
// =========================================================
var path = require('path')

// Routes
// =========================================================
module.exports = (router) => {
      // Route to /survey => displays the survey page
      router.get("/survey", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/survey.html"));
          
      });

       // 'catch-all' Route to all browser extension except /survey and /api/friends => displays the home page
      router.get("*", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/home.html"));
          
      });
    }
