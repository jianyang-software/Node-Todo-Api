
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b2b3245373a5e38201b8b82';//when id is nor correct, same length but not exist, the mongoose will not throw error
                                    //if id length is not right, it invalid, error will be thrown


if(!ObjectID.isValid(id)) {
  console.log("ID not valid");
}
Todo.find({
  _id:id
}).then((todos)=>{
  console.log(('Todos',todos));
});

// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   if(!todo){
//     return console.log("Id not found");
//   }
//   console.log('todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log("Id not found");
//   }
//   console.log("Todo by Id", todo);
// }).catch((e)=>{
//   console.log(e);
// });

var id2 = '5b2da7509f156c26dda1810f';
User.findById(id2).then((user)=>{
  if(!user) {
    return console.log("Unable to find user");
  }
  console.log(JSON.stringify(user, undefined,2));
},(e)=>{
  console.log(e);
});

User.find({location: "boston"}).then((users)=>{
  console.log(users[0]);
});
