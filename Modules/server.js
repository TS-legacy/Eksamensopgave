var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.route('/').get(callbackFunction);

console.log('todo list RESTful API server started on: ' + port);

function callbackFunction(req, res){

    res.header("Access-Control-Allow-Origin", "*");
    console.log("GOT A REQUEST from membership to the tinder app");
    return res.send("You are now a member of tinder 2.0");
}