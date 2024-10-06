// input validtion using global catches, used to handle random gibberish input errors

const express = require("express");
const app = express();

app.use(express.json()); // used to send body req in a post method

app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have "+kidneyLength+" kidneys");
});

// global catches
app.use(function(err, req, res, next) {
    res.json({
        msg: "Sorry, something's up with the server"
    })
})

app.listen(3000);