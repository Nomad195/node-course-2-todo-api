const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
//  db.collection('Todos').find({
//      _id: new ObjectID('5be18d0d9d8371c31c3c05a6')
//     }).toArray().then((docs)  => {
//      console.log('Todos');
//      console.log(JSON.stringify(docs, undefined, 2));
//  }, (err) => {
//      console.log('Unable to fetch todos', err);
//  });




// db.collection('Todos').find().count().then((count)  => {
//     console.log(`Todos Count: ${count}`);
// }, (err) => {
//     console.log('Unable to fetch todos', err);
// });


db.collection('Users').find({"name": "Bella-Ononiwu-Munza"}).toArray().then((docs)  => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to fetch todos', err);
});

    client.close();
});