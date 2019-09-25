const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema is small portion of the User MODEL
const UserSchema = new Schema({
  //String is the global variable to javascript and not mongoose
  name: String


})

//create a collection of user if not exist using the schema UserSchema to follow -- assign the value to User
//User is the entire collection and not indivisual a single user
const User = mongoose.model('user', UserSchema)

//we can now require it from other files
module.exports = User