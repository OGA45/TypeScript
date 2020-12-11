import express from 'express'
const router: express.Router =express.Router();
const{
    Signup,
    Login,
}=require('../controllers/auth');

router.route('/v1/auth/signup').post(Signup);
router.route('/v1/auth/login').post(Login);
module.exports = router;