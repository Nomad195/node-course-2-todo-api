var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');
const {ObjectID} = require('mongodb');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var Todo = new Todo({
        text: req.body.text
    });

    Todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});
 

app.get('/todos', (req, res) => {
Todo.find().then((todos) => {
    res.send({todos});
}, (e)  => {
    res.status(400).send(e);
})
});

app.get('/todos/:id', (req, res) => {
var id = req.params.id;

if (!ObjectID.isValid(id)){
    console.log('404 ID not valid');
   return res.status(404).send();
}

user.findById(id).then((user) => {
    if (!user){
        res.status(404).send('id not found');
        return console.log('Id not found');
    }else{
        res.send({user});
        console.log('User By Id', user);
    }
    
}, (e)  => {
    res.status(400).send('id is incorrect');
});
});

app.listen(3000, () => { 
console.log('Server Started on port 3000');
});

module.exports = {app};