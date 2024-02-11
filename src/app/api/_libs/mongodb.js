import { connect } from "mongoose";


export async function connectDatabase(){
    try{
        await connect(process.env.MONGODB_DATABASE)
    }
    catch(e){
        console.log(e);
        throw e;
    }
}