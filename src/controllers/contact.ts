require('mongoose');
//const get=require('../middleware/token')
//const jwt = require('jsonwebtoken');
const Contact=require('../model/contact_model')
exports.Contact=async(req: any,res: any,next: any)=>{
    const {
        title,
        content
    } = req.body;
    Contact.create({
        title,content
    },function(err: any){
        if(err) return next(err);
    });
    res.status(200).json({
        "success":true
    });
}
const Absence=require('../model/absence_model')
exports.Absence=async(req: any,res: any,next: any)=>{
    const {
        oa_datetime,
        class_name,
        reason
    } = req.body;
    Absence.create({
            oa_datetime,
            class_name,
            reason
    },function(err: any){
            if(err) return next(err);
    });
    res.status(200).json({
        "success":true
    });
}
const Oa=require('../model/oa_model')
exports.Oa=async (req: any,res: any,next: any)=>{
    const {
        oa_datetime,
        class_name,
        reason
    } = req.body;
    Oa.create({
            oa_datetime,
            class_name,
            reason
    },function(err: any){
            if(err) return next(err);
    });
    res.status(200).json({
        "success":true
    });
}