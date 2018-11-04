var db = require("./database")



var MongoClient = require('mongodb').MongoClient;
var uri = "mongodb+srv://lambda:Calhacks5!@notestore-bx2bo.azure.mongodb.net/test?retryWrites=true";

var name = "John";
var words = ["recursion", "list splicing" , "lambda"];
var links = [];


db.getLink(["recursion", "list splicing" , "lambda"], function(data)
{
    console.log(data);
});



//MongoClient.connect(uri, function(err, client) {
   
   //const captions = client.db("noteTime").collection("captions");
   //const notes = client.db("noteTime").collection("notes");
/*
   notes.find({}).toArray(function(err, result) {
    if (err) throw err;
    
    console.log(result[0]);
  });
  */
  /*
  var resp
  captions.find({}).toArray(function(err, result) {
    if (err) throw err;
    var data = result[0]["data"][1];
    
    for(var j  = 0 ; j < words.length ; j++)
    {
        console.log(words[j]);
        for(var i = 0 ; i < data.length ; i++)
        {
            var text = data[i]["text"];
            if(text.search(words[j]) > 0)
            {
                
                console.log(data[i]);
                var ret = "https://youtu.be/" + result[0]["user"] + "?t=" +  Math.trunc(data[i]["start"]);
                links.push(ret);
                console.log(ret);
                break;
            }
           
        }
    }
    
    
  });
  
  
  
   // perform actions on the collection object
   client.close();
}); 
*/