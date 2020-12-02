require('dotenv').config();
//const jwt = require('jsonwebtoken');
const Token=require('../model/token_model');

module.exports =(req: any,res: any,next: any) => {
  try {
    var token=req.headers.authorization.split(' ')[1]; //ヘッダーから取ってくる
  }catch(err){//無ければエラー
    return next(err);
    //return next(new ErrorHandler('トークンが見つからなくてエラー', 404));
  };
  Token.find({token:token},function(err: any,data: any){//DBからトークンを探す
    if(err) {
      return next(err);
    }
    if(!data[0]) return next(new Error("DBからトークンが見つからなくてエラー")); 
    jwt.verify(token,process.env.JwtSecret, (err: any, decoded: any) => {//取ってきたトークンを確認
      if(err){//合わなかったらだめ
        return next(err);
      }else{
        console.log("認証完了");
        res.locals.id=decoded.id;
        return next();
      }
    });
  });
}
