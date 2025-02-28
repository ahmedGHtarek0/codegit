import express from 'express'
import { loginfunction, registers } from '../servisces/usersServic'
 const router=express.Router()
router.post('/register',async(req,res)=>{
    const {email,password}=req.body
    const result=await registers({email,password})
    res.status(result.statescode).send(result.data)
})
router.post('/login',async(req,res)=>{
const {email,password}=req.body
const check=await loginfunction({email,password})
res.status(check.statescode).send(check.data)
})
 export default router