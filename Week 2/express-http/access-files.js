// http server to read a file from url using the file name

const express = require("express");
const fs = require("fs");
const app = express();

app.get("/files/:fileName", function(req, res) {
    const name = req.params.fileName;
    console.log("Last Route: "+name);
    fs.readFile(name, "utf-8", function (err, data) {
        // res.json(data);
        res.json({
            data
        });
    })
});
app.listen(3000);

// access in browser using http://localhost:3000/files/a.txt