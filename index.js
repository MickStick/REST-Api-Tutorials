const express = require('express');
const port = 4444;

//initializes express app
const app = express();

//Listen to port (4444)
app.listen(process.env.port || port, function(){
    console.log("Listening for requests on port: " + port || process.env.port);
});