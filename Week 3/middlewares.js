// using middlewares 

const express = require("express");

const app = express();
let numberOfRequests = 0;

function calculateRequests(req, res, next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    next();
}

app.use(calculateRequests); // dont have to mention in app.get again and again

app.get("/health-checkup", function(req, res) {
    res.json({
        msg: "hi there"
    })
});

app.get("/health-checkup", function(req, res) {

});

app.listen(3000);