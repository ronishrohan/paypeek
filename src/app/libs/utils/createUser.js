import User from "../models/User";
import { connectDatabase } from "../mongodb";
export async function createUser(data) {
  await connectDatabase();
  const find = await User.findOne(data);
  if (!find) {
    await User.create({
      name: data.name,
      email: data.email,
      invoices: [
      ],
    });
  }
}
