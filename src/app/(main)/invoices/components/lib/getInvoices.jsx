import { connectDatabase } from "@/app/libs/mongodb";
import User from "@/app/libs/models/User";

export async function getInvoices(){
    await connectDatabase();
    const user = await User.findOne({name: "Ronish Rohan", email: "ronish.rohan@gmail.com"})
    
    const invoices= user.invoices;
    return invoices;
}