import express from 'express'
import { getallpro } from '../servisces/pro'

const router= express.Router()

router.get('/',async(req,res)=>{
    const getallroute=await getallpro()
    res.status(200).send(getallroute)
})
export default router