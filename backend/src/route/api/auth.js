const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth_config');
const civic = require('../civic_function');

// mongodb import
let Users = require('../../model/user');

/**

 * Create a user with email & password.
 *
 * POST

 * path: /users/
 * params: None
 * body: {
 *   "user": {
 *     "email": String,
 *     "password": String
 *   }
 * }
 *
 * Response:
 *  user object with authorization token
 *  {
 *    "user": {
 *       "_id": "5b0f38772c46910f16a058c5",
 *       "email": "erdeljac.antonio@gmail.com",
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyZGVsamFjLmFudG9uaW9AZ21haWwuY29tIiwiaWQiOiI1YjBmMzg3NzJjNDY5MTBmMTZhMDU4YzUiLCJleHAiOjE1MzI5MDgzMTgsImlhdCI6MTUyNzcyNDMxOH0.5UnA2mpS-_puPwwxZEb4VxRGFHX6qJ_Fn3pytgGaJT0"
 *    }
 *  }
 */
router.post('/', auth.optional, (req, res, next) => {
  const { body: { user } } = req;

  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Users(user);
  finalUser.setPassword(user.password);

  return finalUser.save()
    .then(() => res.json({ user: finalUser.toAuthJSON() }));
});

/**
 * Verify login and return the access token
 *
 * POST
 * path: /users/login
 * params: None
 * body: {
 *   "user": {
 *     "email": String,
 *     "password": String
 *   }
 * }
 *
 * Response:
 *  user object with access token
 *  {
 *    "user": {
 *       "_id": "5b0f38772c46910f16a058c5",
 *       "email": "erdeljac.antonio@gmail.com",
 *       // this is an access token to verify user's logged in.
 *          Add it to authorization header whenever you sends request that requires user authentictiaon
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyZGVsamFjLmFudG9uaW9AZ21haWwuY29tIiwiaWQiOiI1YjBmMzg3NzJjNDY5MTBmMTZhMDU4YzUiLCJleHAiOjE1MzI5MDgzMTgsImlhdCI6MTUyNzcyNDMxOH0.5UnA2mpS-_puPwwxZEb4VxRGFHX6qJ_Fn3pytgGaJT0"
 *    }
 *  }
 */
router.post('/login', auth.optional, (req, res, next) => {
  const { body: { user } } = req;
  if(!user.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() });
    }

    return status(400).info;
  })(req, res, next);
});

/**
 * Verify login
 *
 * GET
 * path: /users/current
 * params: None
 * header: {"Authorization": String(access_token)}
 *
 * Response:
 *  user object with access token
 *  {
 *    "user": {
 *       "_id": "5b0f38772c46910f16a058c5",
 *       "email": "erdeljac.antonio@gmail.com",
 *       // this is an access token to verify user's logged in
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVyZGVsamFjLmFudG9uaW9AZ21haWwuY29tIiwiaWQiOiI1YjBmMzg3NzJjNDY5MTBmMTZhMDU4YzUiLCJleHAiOjE1MzI5MDgzMTgsImlhdCI6MTUyNzcyNDMxOH0.5UnA2mpS-_puPwwxZEb4VxRGFHX6qJ_Fn3pytgGaJT0"
 *    }
 *  }
 */
router.get('/current', auth.required, (req, res, next) => {
  const { payload: { id } } = req;

  return Users.findById(id)
    .then((user) => {
      if(!user) {
        return res.sendStatus(400);
      }

      return res.json({ user: user.toAuthJSON() });
    });
});

router.get('/verify', function(req, res) {

  var token = req.param('token');

civicClient.exchangeCode(token)
    .then(function(userData) {
        var userData = JSON.stringify(userData);
          res.setHeader('Content-Type', 'application/json');
          res.send(userData);
    }).catch(function(error) {
          res.status(500).send('Invalid token');
  });

});

module.exports = router;
