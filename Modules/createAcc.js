//Et svar gives på get requesten og der sendes et svar tilbage
/**
 * kør node server.js i consolen for at aktivere. 
 * Derefter gå til localhost:3000 eller skriv det ind i Postman og se svaret. 
*/

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

app.route('/').get(callbackFunction);

console.log('todo list RESTful API server started on: ' + port); //svar der bliver givet der er forbindelse

function callbackFunction(req, res){

    res.header("Access-Control-Allow-Origin", "*");
    console.log("GOT A REQUEST from membership to the tinder app"); //
    return res.send("You are now a member of tinder 2.0"); //Svar der bliver givet GET request
}
