import { connectDatabase } from "../../_libs/mongodb";
import { User } from "../../_libs/models/User";

export async function GET(){
    await connectDatabase();
    const add = await User.create({name: "test", email:"test"})
    return Response.json({status:"ok"})
}