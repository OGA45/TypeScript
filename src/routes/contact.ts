import express from 'express'
const router: express.Router =express.Router();
const{
    Contact,
    Absence,
    Oa,
}=require('../controllers/contact');

router.route('/v1/contact').post(Contact);
router.route('/v1/contact/absence').post(Absence);
router.route('/v1/contact/oa').post(Oa);
module.exports = router;