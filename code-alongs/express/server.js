const express = require('express');
const facts = require('./facts');

const factsArray = facts.randomFacts;
const getRandomFact = facts.getRandomFact;

const app = express();
// console.log(randomFacts);
const port = 3000;

// Get the request data as an object
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

// get all the facts
app.get( '/facts/all', (req, res) => {
    res.json(factsArray);
});

// get random fact
app.get( '/facts/:index', (req, res) => {
    const index = req.params.index;

    if ( !isNaN(index) ) {
        res.json(factsArray[req.params.index]);
    } else {
        res.json('You need to do a number, dummy');
    }
});

app.get( '/facts', (req, res) => {
    res.json(getRandomFact());
});

// add random fact
app.post( '/facts', (req, res) => {
    const body = req.body.data;

    factsArray.push(body);

    res.json("Fact success added");
});

// update random fact by index
app.put( '/facts/:index', (req, res) => {
    const index = req.params.index;
    const newFact = req.body.data;

    factsArray.splice(index, 1, newFact)
    res.json("Updating random fact by index");
});

// delete random fact by index
app.delete( '/facts/:index', (req, res) => {
    const index = req.params.index;

    factsArray.splice(index, 1)
    res.json("Deleting random fact");
});