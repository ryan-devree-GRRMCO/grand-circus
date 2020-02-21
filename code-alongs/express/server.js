const express = require('express');

const factsAPI = require('./factsAPI');
const parkingAPI = require('./parking');
const cors = require('cors');

const app = express();
// console.log(randomFacts);
const port = 3000;

// Get the request data as an object
app.use(express.json());

// Run static content in public directory
app.use(express.static(__dirname + "/random-facts/public"));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

// Allow us to access the API from different domains
// app.use(cors());

// use facts api module for handling facts
app.use("/facts", factsAPI);

// use parking api module for handling parking
app.use("/parking", parkingAPI);
