import { NextFunction ,Request,Response} from "express";
import jwt from 'jsonwebtoken'
import Usermodels from "../modules/usersmodels";
interface Extendsreq extends Request{
    user?:any
}
const validatejwt=(req:Extendsreq,res:Response,next:NextFunction)=>{
    const authorization = req.get("authorization");
    if(!authorization){
        res.status(403).send('no authorization header Bitch :(')
        return
    }
    const token =authorization.split(' ')[1]
    if(!token){
        res.status(403).send('the fucken token wasnot here Biiiiitch :(((')
        return
       }
       jwt.verify(token,'123',async(err:any,payload:any)=>{
        if(err){
            res.status(403).send('invalid token :( mr hacker')
            return
        }
        if(!payload){
            res.status(403).send('man man what are u doing :((((())))')
        }
        const userpaload= payload as ({email:string,password:string})
        const user=await Usermodels.findOne({email:userpaload.email})
        if(!user){
            res.status(403).send('bitch whwre us the user')
        }
        req.user=user
        console.log(req.user._id)
        next()
       })
}

export default validatejwt