const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

Todo.remove({}).then((result)=>{                    //not get back the removed documents
  console.log(result);
});

// Todo.findOneAndRemove({_id: '5b3060bb8d1d4f05dc1dee2c'}).then((todo)=>{
//   console.log(todo);
// });
//
// Todo.findByIdAndRemove('asdf').then((todo)=>{
//   console.log(todo);
// });
