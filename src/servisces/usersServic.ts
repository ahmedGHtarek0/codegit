import Usermodels from "../modules/usersmodels"
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import twilio from "twilio";
import { Vonage } from "@vonage/server-sdk";
import messagebird from "messagebird";
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






export const email = async () => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:'sbdhdjdjdj0@gmail.com',
      pass: "srmt jlfc vsgi bagg ",
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Maddison Foo Koch 👻" <sbdhdjdjdj0@gmail.com>`,
      to: "ajanmakjanm12@gmail.com, sbdhdjdjdj0@gmail.com,A.Ahmed08579@student.aast.edu",
      subject: "Hello ✔",
      text: "Hello world?",
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};




