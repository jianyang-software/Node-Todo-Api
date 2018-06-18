const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');       //destruct mongodb module
//var obj = new ObjectID();
//console.log(obj);                

//(url, call back)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> { //noneed to explicitly create todoApp database
  if(err) {
     return console.log('Unable to connect to MongoDb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');                                        //same here, no need to explicitly create collections

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result)=>  {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // }) ;

  db.collection('Users').insertOne({
    name: "John smith",
    age: '35',
    location: 'boston'
  }, (err, result)=>{
    if(err) {
      return console.log('Unable to insert document');
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));    //GMT time
  });
  client.close();



});
