//Server til når bruger ændre sin data

//Server code når user ændre sin data___________________________________________________

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3002;

app.listen(port);

app.route('/').get(callbackFunction);

console.log('todo list RESTful API server started on: ' + port); //svar der bliver givet der er forbindelse

function callbackFunction(req, res){

    res.header("Access-Control-Allow-Origin", "*");
    console.log("You have deleted your profile succesfully"); //
    return res.send("You have now deleted you profile"); //Svar der bliver givet GET request
}