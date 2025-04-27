import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: Number,
    required: true,
    unique: true
  },
  role: {
    type: String,
    enum: ['borrower', 'admin'],
    default: 'borrower'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('User', userSchema)
