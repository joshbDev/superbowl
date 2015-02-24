
/*
 * GET home page.
 */
var data = require("../data");
	var	winners = [];
for(year in data) {
	winners.push(data[year]);
}
console.log(winners);
exports.fbteam = function(req, res){

	var sbs = [];
	var team = req.param('team');
	console.log(winners.length);
	for(i = 0, x = winners.length; i < x; i++){
		for(a = 0, s = 2; a < s; a++){
			var replace = winners[i].teams[a].replace(/ /g, ''); 
			console.log(replace);
		if(replace == team){
			sbs.push(winners[i]);
		}
	}
	}
	console.log(winners);
	console.log(sbs);
  if(typeof sbs == '[]') {
  	res.status(404).json({status:"error"});
} else {
  	res.json({sb : sbs});
  }
};