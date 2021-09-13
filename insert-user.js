const { User } = require('./models')

User.create(
  {
    firstName: 'iman',
    lastName: 'laode',
    email: 'admin',
    password: 'admin'
   },
   {
    firstName: 'mantab',
    lastName: 'satu',
    email: 'admin',
    password: 'admin'
   }
   )
    .then(result => {
      console.log(result)
})

