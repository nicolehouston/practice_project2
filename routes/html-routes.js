var path = require("path");

module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    // cms route loads cms.html
    app.get("/add/Location", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/addLocation.html"));
    });
  
    // blog route loads blog.html
    // app.get("/blog", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/blog.html"));
    // });
  
    // authors route loads author-manager.html
    // app.get("/authors", function(req, res) {
    //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    // });
  
  };
  