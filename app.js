const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
let todos = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log("GET Executed.");
    res.send(todos);
    // res.render('./index');
});

app.post('/todo', (req, res) => {
    console.log("GET Executed.");
    res.send('Hello World');
    console.log(req.body);
    todos.push(req.body.todoValue);
    console.log('TODOS ====>>> ', todos);
    // res.render('./index');
});
app.post('/abc', (req, res) => {
    console.log("GET Executed.");
    res.send('Hello World');
    console.log(req.body);
    // res.render('./index');
});


app.delete('/', (req, res) => {
    console.log("--------- ", req.query)
    let index = todos.indexOf(req.query.todo);
    if (index != -1) {
        todos.splice(index, 1);
        res.send('Delete Successfully.');
    } else {
        console.log('error');
        res.send('Delete Unsuccessfully.');
    }
});

app.use('**', (req, res) => { res.send('404') });

app.listen(port, () => { console.log('Running') });


// Middlewares in express
// Configurable functions
// URL Mounting