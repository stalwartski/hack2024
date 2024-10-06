// without using middlewares

const express = require("express");
const app = express();
app.get("/health-checkup", function (req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "harkirat" || password != "pass") {
        res.status(403).json({
            msg: "User doesnt exist",
        });
        return;
    }

    if(kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "Wrong Inputs"
        });
        return;
    }
    
    res.send("Your heart is healthy");
});

app.listen(3000);