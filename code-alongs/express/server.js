const express = require('express');

const factsAPI = require('./factsAPI');
const parkingAPI = require('./parking');

const app = express();
// console.log(randomFacts);
const port = 3000;

// Get the request data as an object
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

// use facts api module for handling facts
app.use("/facts", factsAPI);

// use parking api module for handling parking
app.use("/parking", parkingAPI);

