require('mongoose');
//const jwt = require('jsonwebtoken');
//const Contact=require('../model/contact_model')
exports.Me=async(req: any,res: any,next: any)=>{
    res.status(200).json({
        "success":false
    });
}

exports.Attendance=async(req: any,res: any,next: any)=>{
    res.status(200).json({
        "success":false
    });
}