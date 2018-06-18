//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//(url, call back)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> {
  if(err) {
     return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //delete Many
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result)=>{
  //   console.log(result);
  // }, (err)=>{});


  //delete one-----------only delete the first found one
  // db.collection('Todos').deleteOne({text: "eat lunch"}).then((result)=>{
  //   console.log(result);
  // }, (err)=>{});

  //find one and delete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // }, (err)=>{});

  //client.close();



});
