let Orgs = require('../../model/orgs');
const router = require('express').Router();
const auth = require('../auth_config');
let Users = require('../../model/user');

/**
 * GET
 * 
 * path /orgs/get
 * 
 * Get all the organizations in the database
 * 
 */

/** 
 * POST
 * 
 * Add an org to an user
 * 
 * path: /orgs/add
 * payload: 
 * org_info: {
 *   name: String,
 *   public_addr: String,
 *   description: String,
 *   imagesrc: String,
 *   titile: String,
 *   subtitle: String
 * }
*/
router.post('/add', auth.optional, (req, res, next) => {
    Users.findOne({'email': req.payload.email})
    .then(user => {
        const { body: { org_info } } = req;
        const org = new Orgs(org_info);
        org.save()
        .catch(err => console.error(err));
    
        user.orgs.push(org)
        user.save()
        .then(result => res.json({msg: "success to save"}))
        .catch(err => console.error(err))
    }) 
    .catch(err => console.error(err));
});

module.exports = router;