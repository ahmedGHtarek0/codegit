import mongoose, { Schema, Document, ObjectId } from "mongoose";
import { Iproduct } from "./productmodels";

export interface Icartitems extends Document {
    products: Iproduct[];
    uniteprice: number;
    quan: number;
}

export interface Icart extends Document {
    userid: ObjectId;
    items: Icartitems[];
    totalamount: number;
    status: 'active' | 'completed';
}

const cartItemSchema = new Schema<Icartitems>({
    products: [{ type: Schema.Types.ObjectId, ref: 'product', required: true }],
    uniteprice: { type: Number, required: true },
    quan: { type: Number, required: true, default: 1 }
});

const cartSchema = new Schema<Icart>({
    userid: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
    items: [cartItemSchema],
    totalamount: { type: Number, required: true, default: 0 },
    status: { type: String, enum: ['active', 'completed'], default: 'active' }
});
let a= 'aaa'
export const Cart = mongoose.model<Icart>("Cart", cartSchema);