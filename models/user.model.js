import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  password: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  role: {type: String, default: 'user'},
}, {collection: 'users'});

export default mongoose.models.User || mongoose.model('User', UserSchema)