const assert = require('assert')
const User = require('../src/user');


describe('Validating records', () => {
  it('requires a username', () => {
    const user = new User({
      name: undefined
    })
    //diffference between validate and validateSync
    /** 
     * validateSync is a synchorinize function - no need to go to databse for anything 
     * validation takes place instantly
     * validate() - takes a callback function
     */
    const validationResult = user.validateSync();
    const {
      message
    } = validationResult.errors.name.properties
    console.log(message)

    assert(message === 'Name is required.')


  })

  it('requires a username that is at least 2 characters', () => {
    const user = new User({
      name: 'Al'
    })
    //diffference between validate and validateSync
    /** 
     * validateSync is a synchorinize function - no need to go to databse for anything 
     * validation takes place instantly
     * validate() - takes a callback function
     */
    const validationResult = user.validateSync();
    const {
      message
    } = validationResult.errors.name.properties
    console.log(message)


    assert(message === 'Name must be longer than  2 characters')


  });

  it('disallow invalid records from being saved', (done) => {
    const user = new User({
      name: 'Al'
    })
    // persist the object in the db - if it fails we will get a .catch from the promise
    user.save().catch((validationResult) => {
      const {
        message
      } = validationResult.errors.name.properties
      console.log(message)
      assert(message == 'Name must be longer than  2 characters')
    })
    done()
  })





})