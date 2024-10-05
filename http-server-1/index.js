const express = require('express');
const port = 3000;
const app = express();

app.get('/', function(req, res) {
    res.send("Hello World");
})

// app.post('/conversations', (req, res) => {
//     console.log(req.headers)
//     res.send({
//         msg: "2 + 2 = 4"
//     })
// })
app.listen(port);