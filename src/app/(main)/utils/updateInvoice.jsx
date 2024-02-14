"use server"
import { connectDatabase } from "@/app/libs/mongodb"
import { getServerSession } from "next-auth"
import {ObjectId } from "mongoose";
import User from "@/app/libs/models/User"
import {revalidatePath} from "next/cache"
export async function updateInvoice(invoiceId){
    function format(status){
        if(status > 1){
            return 0
        }
        else{
            return status+1
        }
    }
    const session = await getServerSession();
    await connectDatabase();
    const user = await User.findOne({name: session.user.name, email: session.user.email})
    const ind = user.invoices.findIndex(invoice => invoice._id.toString()==invoiceId)
    user.invoices[ind].status = format(user.invoices[ind].status)
    user.save();
    revalidatePath("/invoices")

}