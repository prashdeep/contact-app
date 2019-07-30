//import express
let express = require('express');
let apiRoutes = require('./api-routes'); 
let bodyParser = require('body-parser');
let mongoose = require('mongoose');



let app = express();


// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
 }));

 app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

let port = process.env.port || 8000;

app.get('/', (req, res) => res.send('Hello World with Express'));


app.use('/api', apiRoutes);

app.listen(port, function(){
    console.log('Running reshub on port '+port);
})