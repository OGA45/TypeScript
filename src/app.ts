const hello = (name: string): void => {
    console.log('Hello',name)
    console.log('Bye',name)
}
hello('OGA')
const PORT = process.env.PORT || 3000;
const DB_LOCAL_URL = process.env.DB_LOCAL_URL || 'mongodb://localhost:27017/testapi';

//const express = require('express');
import express from 'express'
//const app = express();
const app: express.Express=express()
//const router = express.Router();
//const bodyParser = require('body-parser');
import bodyParser from 'body-parser'
//const mongoose = require('mongoose');
import mongoose from 'mongoose'
//const jwt = require('jsonwebtoken');

//サバーポート情報
app.listen(PORT, () => { console.log(`Listning port ${PORT}`) });
// MongoDBの接続情報
const connectDatabase = () => {
    mongoose.connect(DB_LOCAL_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then((con: any)=> {
        console.log(`MongoDB Database connected with host: ${con.connection.host}`);
    })
};

// MongoDBに接続
connectDatabase();
// ミドルウェア
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const tokencheck = require('./middleware/token');//トークン認証
const err =require('./middleware/err');//エラー受け取り
//ルーティング
const public_ = require('./routes/public');//認証なし
const private_ = require('./routes/private');//認証有り
const book = require('./routes/book');
const contact = require('./routes/contact');
const info = require('./routes/info');
const me = require('./routes/me');


app.use(public_);
app.use(tokencheck);//認証を挟む
app.use(private_);
app.use(book);
app.use(contact);
app.use(info);
app.use(me);
app.use(err);//エラー受け取り
