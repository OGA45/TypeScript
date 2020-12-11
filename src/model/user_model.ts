const mongoose = require('mongoose');
const user_Schema = new mongoose.Schema({
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
});
const user_model =mongoose.model('User', user_Schema); 
export function user_find(email:string,password:string){
    user_model.find({email:email,password:password},function(err: any,data: any){
        var res:any[]=new Array(2);
        if(err){
            res[0]=false
            res[1]=err
        }else if (!data[0]){
            res[0]=false
            res[1]=new Error("ユーザーが見つからない")
        }else{
            res[0]=true
            res[1]=data
        }
        console.log(res[0])
        return res
    })
}
export function user_updete(id:string,password:string){
    user_model.updateOne({_id:id},{password:password},function(err: any){
        if(err) return err
        else return true
    });
}
export function user_create(email:string,password:string){
    user_model.create({email,password},function(err: any){
        if (err) return err
        else return true
    })
}