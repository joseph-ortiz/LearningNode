(function(homeController) {

  var data = require("../data");

    homeController.init = function(app)
    {
      app.get("/", function(req, res)
      {
        //res.send("<html><body><h1>" + "Express" + "</h1></body></html>");
        data.getNoteCategories(function(err,results)
        {
          res.render("jade/index",
          {
            title: "Express + Jade + Grunt + Bower + NPM + Bootstrap Material Design + Underscore",
            error: err,
            categories: results
          });
        });
      });
    }

})(module.exports);
