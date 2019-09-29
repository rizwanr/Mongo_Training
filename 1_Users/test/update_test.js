const assert = require('assert')
const User = require('../src/user');

describe('Updating a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({
      name: 'Joe',
      postCount: 0
    });
    joe.save().then(() => {
      done()
    })
  })

  function assertName(operation, done) {
    operation.
    then(() =>
        //find all the users in thhe collection
        User.find({}))
      .then((users) => {
        //checks whether the user.name = Alex
        assert(users.length === 1)
        assert(users[0].name === 'Alex')
        done()
      })


  }

  it('instance type using set and save', (done) => {
    //set the name of the user
    joe.set('name', 'Alex');
    //save it
    assertName(joe.save(), done)
  })


  it('A model instance can update', (done) => {
    //no need to set and save - 
    //this one is more of a bulk update -- update and save
    assertName(joe.updateOne({
      name: 'Alex'
    }), done)
  })

  it('A model class can update', (done) => {
    //find all the records with the name Joe and replace it with Alex
    assertName(
      User.update({
        name: 'Joe'
      }, {
        name: 'Alex'
      }), done
    )
  })


  it('A model class can update one record', (done) => {
    assertName(
      User.findOneAndUpdate({
        name: 'Joe'
      }, {
        name: 'Alex'
      }), done
    )
  })


  it('A model class can find a record with an Id and update', (done) => {
    assertName(
      User.findByIdAndUpdate(joe._id, {
        name: 'Alex'
      }), done
    )
  })

  //start of Mongo Update modifiers
  it('user can have their post count incremented by 1 ', (done) => {
    //update the user Joe 
    User.update({
      name: 'Joe'
    }, {
      //increment by 1
      $inc: {
        postCount: 1
      }
    }).then(() => User.findOne({
      'name': 'Joe'
    })).then((user) => {
      assert(user.postCount === 1)
      done()
    })
  })

})