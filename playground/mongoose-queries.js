const {ObjectID} = require('mongodb');
const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

var id = '5be7d4f30e41800ec4a6cdac';
var id_user = '5be2a8561af39913fc03da49';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

if (!ObjectID.isValid(id_user)){
    console.log('ID not valid');
}
// user.find({
//     _id: id_user
// }).then((users) => {
//     console.log('Users', users);
// });


user.findById(id_user).then((users) => {
    if (!users){
        return console.log('Id not found');
    }
    console.log('Todo By Id', users);
}).catch((e) => console.log(e));

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));