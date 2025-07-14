import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['Developer', 'Designer', 'Project Manager', 'Other'], // Example roles
  },
  skills: {
    type: [String],
    default: [],
  },

  connections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
