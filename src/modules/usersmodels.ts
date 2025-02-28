import mongoose,{Schema,Document} from "mongoose";
export interface Iusers extends Document{
    email:string;
    password:string;
}

const userscheam= new Schema<Iusers>({
    email:{type:String,required:true},
    password:{type:String,required:true}
})

const Usermodels=mongoose.model<Iusers>('users',userscheam)
export default Usermodels