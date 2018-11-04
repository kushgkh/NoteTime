var keyword = require('gramophone');
var db = require("./database")
const express = require('express');
const app = express();




app.get('/page/:id', function (req, res) {
 var data = req.params.id;
 console.log(data);
 //var keys = keyword.extract('I love lambda to use tree recursion and recursion with recursion with lambda' , {limit: 10});
 
 var keys = keyword.extract(data , {limit: 10});
 db.getLink(keys, function(data)
    {
         res.header("Access-Control-Allow-Origin", "*");
         res.header("Access-Control-Allow-Headers", "X-Requested-With");
         return res.send(data);
    });
});


app.listen(process.env.PORT || 8080);






