const assert = require('assert')
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    //created a new user from the User model
    // User is the model/class - joe is instance of the User class
    const joe = new User({
      name: 'Joe'

    });
    //persist to the database - the instance of joe is just not a user object - but with a bunch of functions tied to it. one of which is save.
    //jow.save-> returns a promise
    joe.save().then(() => {
      //has Joe been successfully saved
      assert(!joe.isNew);
      //call done to move to the next test
      done();
    })
  })
});