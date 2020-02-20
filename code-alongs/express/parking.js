// You will always need these lines for 
// setting up routes
const parking = require('express').Router();

const parkingLots = ['Dash Lot', 'Ellis', 'Pearl & Ionia'];

parking.get('/all', (req, res) => {
    res.json(parkingLots);
})


// Don't forget to export like I did
module.exports = parking;