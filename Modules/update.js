//Server til når bruger ændre sin data

//Server code når user ændre sin data___________________________________________________

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

app.listen(port);

app.route('/').get(callbackFunction);

console.log('todo list RESTful API server started on: ' + port); //svar der bliver givet der er forbindelse

function callbackFunction(req, res){

    res.header("Access-Control-Allow-Origin", "*");
    console.log("You have changed your information succesfully"); //
    return res.send("information changed"); //Svar der bliver givet GET request
}