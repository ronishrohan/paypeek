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

let UserModel;
try {
    UserModel = mongoose.model('User');
  } catch (error) {
    UserModel = mongoose.model('User', UserSchema);
  }

export default UserModel;