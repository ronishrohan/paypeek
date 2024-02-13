import mongoose from "mongoose";


export async function connectDatabase(){
    try{
        await mongoose.connect(process.env.MONGODB_DATABASE)
    }
    catch(e){
        console.log(e);
        throw e;
    }
}