// http server to calculate sum from 0 to ?n=' ' 

const express = require("express")

function calculateSum(n) {
    let ans = 0;
    for(i = 1; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

const app = express();
app.get("/", function(req, res) {
    const n = req.query.n; // taking input from the '?'mark
    const ans = calculateSum(n)
    res.send(ans);
})

app.listen(3000);