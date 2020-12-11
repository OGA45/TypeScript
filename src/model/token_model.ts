const mongoose = require('mongoose');
const token_model_Schema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    token: { type: String, require: true, unique: true },
});
const token_model=mongoose.model('Token', token_model_Schema);
export function tokenupdated(email:string,token:string){
    token_model.updateOne({email:email},{token:token},{upsert:true},function(err: any,data: any) { 
        if(err) return err
        else return true
    });
}
export function tokendeleted(token:string){
    token_model.deleteOne({token:token},function(err: any){
        if(err) return err
        else return true
    });
}