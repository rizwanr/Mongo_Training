const assert = require('assert')
const User = require('../src/user');

describe('Creating records', () => {
  let joe;
  beforeEach((done) => {
    joe = new User({
      name: 'Joe'
    });
    joe.save().then(() => {
      done()
    })
  })
  //becoz its an asynchonous test, some amount of time to complete, we have to include the done callback
  it('find all users with the name joe', (done) => {
    //we are trying to find all the users with the name of Joe
    User.find({
      name: 'Joe'
    }).then((users) =>
      assert(users[0]._id.toString() === joe._id.toString())
    )
    done();
  });
  it('find a user with a particular ID', (done) => {
    User.findOne({
      _id: joe._id
    }).then((user) => {
      assert(user.name = joe.name)
      //assert(user.name = 'Joe')
    })
    done()
  })
})