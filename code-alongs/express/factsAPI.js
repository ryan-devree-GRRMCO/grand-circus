const express = require("express");
const factsEndpoint = express.Router();

const facts = require('./facts');

const factsArray = facts.randomFacts;
const getRandomFact = facts.getRandomFact;

// get all the facts
factsEndpoint.get( '/all', (req, res) => {
    res.json(factsArray);
});

// get random fact
factsEndpoint.get( '/:factId/:index', (req, res) => {
    const index = req.params.factId;

    if ( !isNaN(index) ) {
        res.json(factsArray[req.params.factId]);
    } else {
        res.json('You need to do a number, dummy');
    }
});

factsEndpoint.get( '/', (req, res) => {
    res.json(getRandomFact());
});

// add random fact
factsEndpoint.post( '/', (req, res) => {
    const body = req.body;

    const ID = new Date().getTime();

    const newItem = {
        id: ID,
        product: body.product,
        price: body.price,
        quantity: body.quantity
    }

    factsArray.push(newItem);

    res.json(newItem);
});

// update random fact by index
factsEndpoint.put( '/:index', (req, res) => {
    const index = req.params.index;
    const newFact = req.body.data;

    factsArray.splice(index, 1, newFact)
    res.json("Updating random fact by index");
});

// delete random fact by index
factsEndpoint.delete( '/:index', (req, res) => {
    const index = req.params.index;
    res.status(204);
    
    factsArray.splice(index, 1)
    res.json("Deleting random fact");
});

module.exports = factsEndpoint;