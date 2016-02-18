var projects = require('../projects.json');

/*
 * GET home page.
 */


function initializePage () {
$('.likeBtn').click(function(){console.log("eggs");});
}

exports.view = function(req, res){
	projects["grid"] = false;
  	res.render('index', projects);
 
};

exports.viewGrid = function(req, res){
	projects["grid"] = true;
  	res.render('index', projects);
 
};

