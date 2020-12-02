require('mongoose');
//const jwt = require('jsonwebtoken');
const Info=require('../model/info_model')
exports.Info=async(req: any,res: any,next: any)=>{
    Info.find({

    }, function(err: any,info: any){
        if(err) return next(err);
        res.status(200).json({
            success: true,
            info
        })
    })
}