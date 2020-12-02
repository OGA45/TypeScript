require('mongoose');
//const jwt = require('jsonwebtoken');
const Book=require('../model/book_model')
exports.BookAdd=async(req: any,res: any,next: any)=>{
    const {
        title,
        tags
    } = req.body;
    if(!title||!tags) {
        return next(new Error("タイトルもしくはタグが空白です"));
    }
    await Book.create({
        title,tags
    },function(err: any){
        if(err) return next(err);
    });
    res.status(200).json({
        success:true,
        book:{
            bookid:"",
            title:title,
            tags:tags
        }
    });
}
exports.BookSearch=async(req: any,res: any,next: any)=>{
    if(!req.body.search){//title?
        Book.find({//全部出す
        },function(err: any,books: any){
            if(err||!books) return next(new Error("見つかりませんでした"));
            res.status(200).json({
                success:true,
                books
            })
        })
    }else{
        Book.find({
            title:req.body.search
        },function(err: any,book: any){
            if(err||!book) return next(new Error("見つかりませんでした"));
            res.status(200).json({
                success:true,
                book
            });
        });
    }
}