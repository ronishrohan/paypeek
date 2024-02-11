import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    invoices: [
        {
            id: String,
            client: String,
            amount: Number,
            status: Number,
            date: Date
        }
    ]
})

export default mongoose.models.User || mongoose.model("User", UserSchema);