import express from 'express'
const router: express.Router =express.Router();
const{
    BookAdd,
    BookSearch
}=require('../controllers/book');

router.route('/v1/book').post(BookAdd);//登録
router.route('/v1/book').get(BookSearch);//紹介・検索

module.exports = router;