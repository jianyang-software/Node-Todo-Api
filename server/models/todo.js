var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {            //mongoose will automatically change 'Todo' to todos collection
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default: null
  }
});

module.exports = {Todo};
