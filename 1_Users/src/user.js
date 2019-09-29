const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema is small portion of the User MODEL
const UserSchema = new Schema({
  //String is the global variable to javascript and not mongoose
  name: {
    type: String,
    //pass in the validate object
    validate: {
      validator: (name) => name.length > 2,
      message: "Name must be longer than  2 characters"
    },
    required: [true, 'Name is required.'],

  },
  postCount: Number,



})

//create a collection of user if not exist using the schema UserSchema to follow -- assign the value to User
//User is the entire collection and not indivisual a single user
const User = mongoose.model('user', UserSchema)

//we can now require it from other files
module.exports = User