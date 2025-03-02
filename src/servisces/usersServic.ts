import Usermodels from "../modules/usersmodels"
import jwt from 'jsonwebtoken'
interface registersparams{
    email:string,
    password:string
}
export const registers=async({email,password}:registersparams)=>{
const findusers=await Usermodels.findOne({email})
if(findusers){
    return{data:'the users is already exsits',statescode:400}
}
const addusers= new Usermodels({email,password})
await addusers.save()
const data=generatejwt({email,password})
return{data,statescode:200}
}
export const loginfunction =async({email,password}:registersparams)=>{
    const findusers=await Usermodels.findOne({email:email})
    if(!findusers) {
        return{data:'the email is err',statescode:400}
    }
    const passwordcheck=password===findusers.password
    if(!passwordcheck){
        return {data:'the password is err',statescode:400}
    }
   const data=generatejwt({email,password})
    return{data,statescode:200}
}
const generatejwt=(data:any)=>{
    return(jwt.sign(data,'123'))//if i didnot give the token Time  so the token will not expire 
}
