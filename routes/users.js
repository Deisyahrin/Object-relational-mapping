var express = require('express');
var router = express.Router();
const { User } = require('./../models')
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/', function(req, res, next) {
          let password = ''
          bcrypt.hash(req.body.password, 1, function(err, hash) {
            // Store hash in your password DB.
            User.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body. email,
              password:  hash
            })
              .then(result => {
                res.status(200).json(result)
          })
        });

       

});

router.post('/login', function(req, res, next) {

});

module.exports = router;