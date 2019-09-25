const assert = require('assert')
const User = require('../src/user');


describe('Deleting a user', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({
      name: 'Joe'
    });
    joe.save().then(() => {
      done()
    })
  })

  it('model instance remove', (done) => {
    //operation to ensure joe is removed
    joe.deleteOne()
      .then(() => {
        //ensure that Joe does not exist in the collection anymore
        User.findOne({
          name: 'Joe'
        }).then((user) => {
          //check there is no Joe user
          assert(user === null)
        })

        done()
      })
  })



  it('class method remove', (done) => {
    //Remove a bunch of records with criteria
    User.deleteOne({
      name: 'Joe'
    }).then(() => {
      User.findOne({
        name: 'Joe'
      }).then((user) => {
        assert(user === null)
      })

    })
    done()
  });

  it('class method findOneAndRemove', (done) => {
    User.findOneAndDelete({
      name: 'Joe'
    }).then(() => {
      User.findOne({
        name: 'Joe'
      }).then((user) => {
        assert(user === null)
      })

    })
    done()
  })

  it('class method findByIdAndRemove', (done) => {
    User.findByIdAndDelete(joe._id)
      .then(() => {
        User.findOne({
          name: 'Joe'
        }).then((user) => {
          assert(user === null)
        })
      })
    done()

  })


});