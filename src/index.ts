import express from 'express'
import mongoose from 'mongoose'
import usersRouts from './Routs/usersRouts'
import { addpro } from './servisces/pro'
import proro from './Routs/proro'
import cartroute from './Routs/cartroute'
const app = express()
const port = 3001
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/ahmedtest").then(() => console.log('ahmed test')).catch((i)=>console.log('errr' ,i))
app.use('/users',usersRouts)
addpro()//seed the peoducts to the database
app.use('/products',proro)
app.use('/cart',cartroute)
app.listen(port,()=>{
    console.log('server is running')
}
)