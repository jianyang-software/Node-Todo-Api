const _ = require('lodash');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.post('/todos', (req, res)=> {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res)=> {
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

//GET /todos/123456
app.get('/todos/:id', (req, res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send('NOT valid ID');
  }

  Todo.findById(id).then((todo)=>{
    if(!todo) {
      return res.status(404).send('Unable to find document');
    }
    res.send({todo});
  }, (e)=>{
    res.status(404).send();

  });
  //Valid using isValid
    //404 send back empty Second

  //findById
  // success
  //error
    //400 and send empty back
});



app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send("Invalid ID");
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo) return res.status(404).send('Not found document at specified ID');
    res.send({todo});
  }, (e)=>{
    res.status(404).send();
  });
});



app.patch('/todos/:id', (req, res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);      //only fields will be modified by user

  if(!ObjectID.isValid(id)) {
    return res.status(404).send("Invalid ID");
  }

  if(_.isBoolean(body.completed) && body.completed) {   //boolean and true
    body.completedAt= new Date().getTime();

  }else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(404).send();

  }); //option to return new updated results not the original one

});

app.listen(port, ()=>{
  console.log(`Started on port ${port}`);
});


module.exports = {app};
