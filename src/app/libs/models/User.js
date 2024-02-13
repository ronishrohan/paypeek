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

let User;
try {
    User = mongoose.model('User');
  } catch (error) {
    User = mongoose.model('User', UserSchema);
  }

export default User;