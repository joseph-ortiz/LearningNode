(function(data){

var seedData = require("./seedData");
//var database = require("./database");
data.getNoteCategories = function(next){
	next(null, seedData.initialNotes);
};//seedDatabase();
})(module.exports);
