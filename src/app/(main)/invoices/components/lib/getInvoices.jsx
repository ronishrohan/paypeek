import { connectDatabase } from "@/app/libs/mongodb";
import User from "@/app/libs/models/User";
import { getServerSession } from "next-auth";

export async function getInvoices(query) {
  const session = await getServerSession();
  await connectDatabase();
  const user = await User.findOne({
    name: session.user.name,
    email: session.user.email,
  });

  if (user) {
    const invoices = user.invoices;
    if(query=="pending"){
      const transformed = invoices.filter((invoice, index) => invoice.status===0)
      return transformed;
    }
    return invoices;
  }
  else{
    return []
  }
}
