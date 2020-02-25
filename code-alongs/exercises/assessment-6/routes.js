import express from 'express';

const routes = express.Router();

const students = [{
    id: 1,
    firstName: "Obi-Wan",
    lastName: "Kenobi"
},
{ id: 2, firstName: "Boba", lastName: "Fett" },
{ id: 3, firstName: "Luke", lastName: "Skywalker" },
{ id: 4, firstName: "Anakin", lastName: "Skywalker" },
{ id: 5, firstName: "Jango", lastName: "Fett" }
];

let lastId = students.length;

const findIndexById = id => students.findIndex(student => student.id === parseInt(id))

routes.get('/', (req, res) => {
    res.json(students);
})

routes.get('/:id', (req, res) => {
    const byId = findIndexById(req.params.id);

    if ( byId === -1 ) {
        res.status(404);
        res.json('Not found');
    }

    res.json(students[byId]);
})

routes.get('/last-name/:lastName', (req, res) => {
    const byLastName = students.filter(student => student.lastName.toLowerCase() === req.params.lastName.toLowerCase());

    res.json(byLastName);
})

routes.post('/', (req, res) => {
    const newStudent = req.body;

    lastId++;

    newStudent.id = lastId;

    if (!newStudent.firstName) {
        res.status(400);
        res.json('First name not provided')
    } else if (!newStudent.lastName) {
        res.status(400);
        res.json('Last name not provided')
    } else {
        students.push(newStudent);

        res.status(201); // Created
        res.json(students);
    }
})


routes.put('/:id', (req, res) => {
    // get the index of the matching id
    const index = findIndexById(req.params.id);

    const newStudent = req.body;
    newStudent.id = parseInt(req.params.id);

    // update that value in the array
    students.splice(index, 1, newStudent);

    res.json(students[index]);
})


routes.delete('/:id', (req, res) => {
    // get the index again
    const index = findIndexById(req.params.id);

    const oldStudent = students.splice(index, 1);
    res.status(200); // deleted

    res.json(oldStudent);
})


export default routes;