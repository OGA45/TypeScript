const mongoose=require('mongoose');
require('dotenv').config();
import jwt from 'jsonwebtoken'
const tokens =require('../model/token_model')
const user = require('../model/user_model')
//const Token=require('../model/token_model')
//const jwt = require('jsonwebtoken');
//const get=require('../middleware/token')
//アカウント作成
exports.Signup=async (req: any, res: any,next: any) => {
    const {
        email,
        password
    } = req.body
    const users =await user.user_create(email,password)
    if(user!=true){
        return next(users)
    }else{
        res.status(200).json({
            success:true,
        })
    }
}
//ログイン処理
exports.Login=async(req: any,res: any,next: any)=>{
    console.log("はじめ")
    const {
        email,
        password
    } = req.body
    console.log("呼出し前")
    const users =await user.user_find(email,password)//同期したいのに同期しない
    console.log("呼出し後")
    console.log(users)
    if(users[0]===false){
        return next(users[1])
    }else{
        const payload = {//中に入れるデータ
            id: users[1][0]._id,
        };
        const options = {expiresIn: "5m"}//有効時間
        const env:string=process.env["JwtSecret"]!
        const token = jwt.sign(payload,env,options)
        //ここにトークンを更新する関数を入れる
        const token_updete=await tokens.tokenupdated(email,token)
        if (true!=token_updete){
            return next(token_updete)
        }else{
            res.status(200).json({
                success:true,
                token:token
            })
        }
    }
}
//パスワード変更
exports.UpdatePassword=async (req: any,res: any,next: any) => {
    const id=mongoose.Types.ObjectId(res.locals.id)
    const users =user.user_updete(req.body.email,req.body.password)
    if (users!=true){
        return next(users)
    }else{
        res.status(200).json({
            success:true
        })
    }
}
//ログアウト処理 tokendeleted
exports.Logout=async(req: any,res: any,next: any)=>{
    var token=req.headers.authorization.split(' ')[1]
    const token_delete =tokens.tokendeleted(token)
    if(true!= token_delete){
        return next(token_delete)
    }else{
        res.status(200).json({
            success:true
        })
    }
}