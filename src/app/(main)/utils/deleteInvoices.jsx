"use server"

import { connectDatabase } from "@/app/libs/mongodb"
import {revalidatePath} from "next/cache"
import User from "@/app/libs/models/User"
import { getServerSession } from "next-auth"
import { getSession } from "next-auth/react"
import {ObjectId} from "mongoose"
export async function deleteInvoices(invoices){
    const session = await getServerSession();
    await connectDatabase();
    const user = await User.findOne({name: session.user.name, email: session.user.email})
    
    user.invoices = user.invoices.filter(invoice => {
        console.log(invoices.includes(invoice._id.toString()))
        return !invoices.includes(invoice._id.toString())
    })
    
    await user.save();
    revalidatePath("/invoices")
}