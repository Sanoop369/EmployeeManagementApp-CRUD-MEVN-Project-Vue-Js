var express = require('express');
var server = express();
var routes = require('./routes/routes');
const cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/world", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function checkDB(error) {
    if (error) {
        console.log("Error connecting to the database");
    } else {
        console.log("DB STARTED...");
    }
});

// Enable CORS for all routes before defining routes
server.use(cors());

// Parse JSON request body
server.use(express.json());

// Define your routes
server.use(routes);

// Start the server
server.listen(8000, function check(error) {
    if (error) {
        console.log("Error starting the server");
    } else {
        console.log("Server started on port 8000");
    }
});
