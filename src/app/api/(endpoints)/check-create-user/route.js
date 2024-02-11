import { connectDatabase } from "../../_libs/mongodb";
import User from "../../_libs/models/User";

export async function POST(request){
    await connectDatabase();
    const data = await request.json();
    
    const find = await User.findOne(data)
    
    if(!find){
        await User.create(data)
    }
    else{
        
        
    }
    return Response.json(find)
}