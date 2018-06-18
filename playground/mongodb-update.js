
const {MongoClient, ObjectID} = require('mongodb');

//(url, call back)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=> { //noneed to explicitly create todoApp database
  if(err) {
     return console.log('Unable to connect to MongoDb server');
  }
  console.log("connected to MongoDB");
  var db = client.db("TodoApp");
  client.collection('Todos').findOneAndUpdate({
    _id:new ObjectID('5b25cd4e624b9c1f4c7ffdb8')
  }, {
    $set:{
      completed:true
    }
  },{
    returnOriginal:false
  }).then((result)=> {
    console.log(result);
  });

  client.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b25cfb5a799ee1354f36ade')
  },{
    $set: {
      name:'ANDREW'
    },
    $inc:{
      age:1
    }
  },{
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  });

  });
  //client.close();
