import express from 'express'
import { getActiveCart } from '../servisces/cartsecrvic'
import validatejwt from '../middlewares/validate'
const router = express.Router()

router.get('/',validatejwt, async(req:any,res)=>{
    const userid=req.user._id
    console.log(userid)
    const cart=await getActiveCart({userid})
    res.status(200).send(cart)
})
router.post('/additems',validatejwt,async(req:any,res)=>{
    const userid= req.user._id
    
})

export default router