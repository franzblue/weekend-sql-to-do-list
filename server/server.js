// Require routes here
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const taskRouter = require('./routes/task_router.js')
const { default: swal } = require("sweetalert");

//  App.use Routes go here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));
app.use('/tasks', taskRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('up and running on port:', PORT);
});