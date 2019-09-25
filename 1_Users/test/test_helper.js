//require the mongoose package
const mongoose = require('mongoose');
//connect to mongodb users_test db - on my present machine, try to find users_test db
//we do not have to create the db ahead of time
mongoose.connect('mongodb://localhost/users_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//we wait for the connection to setup - once connected 
//once and on are event handlers
//once - watch for mongoose to emit an event for open one time and run the function

//es6 implmentation of promise -- whenever you want to create a promise use this implementation of Promise 
mongoose.Promise = global.Promise

//need to connect to MongoDb jusst one time- hence we want to call it in the before
before(() => {
  mongoose.connection.once('open', () => console.log('Good to go'))




    //watch for mongoose to emit an event for error and run the functio n
    .on('error', (error) => {
      console.warn('warning', error)
    })
})


//done tells mocha, 
beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
  //no matter what time it takes, make sure the function is run and then call done()- this will run the next test
  //done is  callback function

})