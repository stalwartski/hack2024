// http server to create a simple hospital backend system for one user

const express = require("express");
const app = express()

const users = [{
    name: "Raj", 
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

// input and get details
app.get("/", function(req, res) {
    const rajKidneys = users[0].kidneys;
    const noOfKidneys = rajKidneys.length;
    let noOfHealthyKidneys = 0;
    for (let i = 0; i < noOfKidneys; i++) {
        if(rajKidneys[i].healthy) {
            noOfHealthyKidneys = noOfHealthyKidneys + 1;
        }
    }
    const noOfUnHealthyKidneys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnHealthyKidneys
    })
})

// add healthy/ unhealthy kidney to the array
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Added a kidney"
    })
})

// replacing all unhealthy kidneys to healthy one
app.put("/", function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all unhealthy kidneys
app.delete("/", function(req, res) {
    const newKidneys = [];
    if (isThereAtleast1UnhealthyKidney()) {    // checking if atleast one unhealthy kidney is there then it will delete
        console.log(isThereAtleast1UnhealthyKidney());
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg: "Removed all unhealthy kidneys"})
    } else {
        res.status(411).json({
            msg: "You don't have any unhealthy kidneys to remove"
        });
    }
})

// function to check if there is atleast one unhealthy kidney present
function isThereAtleast1UnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);