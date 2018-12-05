import { Router } from 'express';

const router = Router();
const server_info = require('./server_info');

/**
 * If user is logged in, passport middleware creates req.user object. So you can verify if user is logged in by simply
 * checking 
 * 
 * if (req.user) {
 *   // do what you want
 * } else {
 *   // this means user's not logged in.
 * }
 * 
 */

/**
 * GET home page
 */
router.get('/', (req, res) => {
  res.send('hello world');
});

/**
 * User Authentication
 * 
 * API:
 *   POST users/
 *   POST users/login
 *   POST users/current
 */
router.use('/users', require('./api/auth'));

//router.use('/coinbase', require('./api/coinbase'));


export default router;
