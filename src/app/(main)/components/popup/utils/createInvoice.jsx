"use server"
import {revalidatePath} from "next/cache"
import { getServerSession } from "next-auth"
import { connectDatabase } from "@/app/libs/mongodb";
import User from "@/app/libs/models/User"; 
export async function createInvoice(form,state){
    await new Promise(res => setTimeout(res, 5000))
    const session = await getServerSession();
    const data = {
        id: form.id,
        client: form.client,
        amount: form.amount,
        status: state,
        date: new Date(),
    }
    await connectDatabase();
    const user = await User.findOne({name: session.user.name, email: session.user.email})
    user.invoices.push(data);
    console.log(user)
    await user.save();
    revalidatePath("/invoices")

    
}