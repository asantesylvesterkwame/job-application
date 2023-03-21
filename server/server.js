const express = require('express');

// starting express
const app = express();

// function for get request for routes
app.get(("/"), (req,res) => {
    res.json({message: "Welcome to the app"})
});

// listen for requests
app.listen(4000, () => {
    console.log("listening on port 4000!!");
})