const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = 123456;

const app = express();

const ALL_USERS = [
    {
        username: "merababu@gmail.com",
        password: "123",
        name: "Mera Babu",
    },
    {
        username: "someone@gmail.com",
        password: "1234",
        name: "Someone",
    },
    {
        username: "everyone@gmail.com",
        password: "12345",
        name: "Everyone",
    },
];

function userExists(username, password) {

}

app.post("/signin", function(res, req) {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exists",

        });
    }

    var token = jwt.sign({ username: username }, "shhhhh");
    return res.json({
        token,
    });
});

app.get("/users", function(req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of usernames other than this one
    }
    catch (err) {
        return res.status(403).json({
            msg: "Invalid Token",
        });
    }
});   

app.listen(3000);