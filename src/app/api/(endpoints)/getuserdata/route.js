import { connectDatabase } from "@/app/libs/mongodb";
import User from "@/app/libs/models/User";


export async function POST(req){
    
    await connectDatabase();
    const data = await req.json();
    const user = await User.findOne(data)
    const invoices= user.invoices;
  
    
    return Response.json({status: "ok", data: invoices})
}