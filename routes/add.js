var data = require("../data.json");

exports.addFriend = function(req, res) {    
    var name = req.query.name;
    var description = req.query.description;
    data["friends"].push({
        "name" : name,
        "description" : description,
        "imageURL" : "http://lorempixel.com/400/400/people/" 
    });

    console.log(data);

    res.render('add', data);
 }