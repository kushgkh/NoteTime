var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://lambda:Calhacks5!@notestore-bx2bo.azure.mongodb.net/test?retryWrites=true";

var u_id = "user02";
var data = "Tree Recursion (0:23) Tail Call (0:39)"

module.exports = {
uploadCaption: function(u_id , data)
{
  MongoClient.connect(uri, function(err, client) {
   
   const collection = client.db("noteTime").collection("captions");
   
   var doc = {"user" : u_id , "data" : data};
   
   collection.insert(doc, function(err,data){
    if(err)
      throw(err);
    else
     console.log("sucessfuly inserted");
   });
   
   // perform actions on the collection object
   client.close();
}); 
},

uploadNote: function(u_id , data)
{
  MongoClient.connect(uri, function(err, client) {
   
   const collection = client.db("noteTime").collection("notes");
   
   var doc = {"user" : u_id , "data" : data};
   
   collection.insert(doc, function(err,data){
    if(err)
      throw(err);
    else
     console.log("sucessfuly inserted");
   });
   
   // perform actions on the collection object
   client.close();
}); 
},

getLink: function(words , fun)
{
   var links = [];
   MongoClient.connect(uri, function(err, client) {
   
   const captions = client.db("noteTime").collection("captions");
 
    captions.find({}).toArray(function(err, result) {
    if (err) throw err;
    
    
    for(var j  = 0 ; j < words.length ; j++)
    {
        var found = false;
        for( var k = 0 ; k < result.length ; k++)
        { 
            var data = result[k]["data"][1];
            for(var i = 0 ; i < data.length ; i++)
            {
                var text = data[i]["text"];
                if(text.search(words[j]) > 0 && !found)
                {
                    
                    //console.log(data[i]);
                    found = true;
                    var ret = "https://youtu.be/" + result[0]["user"] + "?t=" +  Math.trunc(data[i]["start"]);
                    links.push({"word": words[j] , "link": ret});
                    //console.log(ret);
                    break;
                }
            
            }
        }
        
    }
    
    fun(links);
    
    
    
    
  });
   // perform actions on the collection object
   client.close();
    });
 
    
}

//uploadCaption("hi" , "test");
}

