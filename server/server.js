const express = require('express');
require("dotenv").config();

// starting express
const app = express();

// function for get request for routes
app.get(("/"), (req,res) => {
    res.json({message: "Welcome to the app"})
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port 4000!!");
})