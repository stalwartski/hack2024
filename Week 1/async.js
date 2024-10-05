const fs = require("fs"); // filesystem module

// async function
fs.readFile("a.txt", "utf-8", function(err, data) { 
    console.log(data);
})

// sync function
console.log("hello there sync");

// sync function gets printed first cause async function is an expensive function
// you delegate task to it. so it prints later after sync function