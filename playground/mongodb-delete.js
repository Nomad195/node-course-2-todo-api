const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

        // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });



    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });


    
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndDelete({
    //        _id: new ObjectID('5be174232d812e213cf781ce')
    //        }).then((result) => {
    //     console.log(result);
    // });


    //  db.collection('Users').deleteOne({name: 'Bella Ononiwu Munza'}).then((result) => {
    //      console.log(result);
    //  });



     db.collection('Users').deleteMany({name: 'Bella Ononiwu Munza'}).then((result) => {
        console.log(result);
    });

     client.close();
});