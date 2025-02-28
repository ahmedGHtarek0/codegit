import mongoose,{Schema,Document} from "mongoose";
export interface Iproduct extends Document{
    title:string;
    img:string;
    price:number;
    stock:number
}
const porductscehma= new Schema<Iproduct>({
    title:{type:String},
    img:{type:String},
    price:{type:Number},
    stock:{type:Number,default:0},
})

const productmodels= mongoose.model<Iproduct>('product',porductscehma)
export default productmodels