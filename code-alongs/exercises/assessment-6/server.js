import express from 'express';
import routes from './routes.js';

// create our web server
const app = express();

// Get data from req.body
app.use(express.json());

// Attach students endpoint router exported
// in routes.js
app.use('/students', routes);

app.listen(3000, () => console.log('Listening on http://localhost:3000'));

