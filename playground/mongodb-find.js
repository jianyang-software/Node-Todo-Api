const MongoClient = require('mongodb').MongoClient;

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

  // db.collection('Todos').find({completed:false}).toArray().then((docs)=> {    //for Id :{_id: new ObjectID('57abc123...')}, since id is not string
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=> {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos total count: ${count}`)
  // }, (err)=> {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: "John smith"}).toArray().then((docs)=> {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=>{
    console.log('Unable to fetch todos', err);
  });
  //client.close();



});
