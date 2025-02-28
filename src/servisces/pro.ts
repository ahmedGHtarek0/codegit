import productmodels from "../modules/productmodels";

export const getallpro=async()=>{
    return await productmodels.find()
}
export const addpro=async()=>{
    const products=[
        {title:'ahmedtarek img',img:'koko',price:20,stock:10},
        {title:'ahmedtarek img',img:'koko',price:20,stock:10},
        {title:'ahmedtarek img',img:'koko',price:20,stock:10},
        {title:'ahmedtarek img',img:'koko',price:20,stock:10},
        {title:'ahmedtarek img',img:'koko',price:20,stock:10},
        {title:'ahmedtarek img',img:'koko',price:20,stock:10},
        {title:'ahmedtarek img',img:'koko',price:20,stock:10},
    ];
    const prod= await getallpro()
    if(prod.length===0){
        await productmodels.insertMany(products)
    }
}

