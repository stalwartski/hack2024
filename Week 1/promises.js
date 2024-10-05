// syntactical sugar that makes ca;;back fn more readable

const fs = require("fs");

function rishavsReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
        });
    })
}

// callback fun to call
function onDone(data) {
    console.log(data);
}

rishavsReadFile().then(onDone);