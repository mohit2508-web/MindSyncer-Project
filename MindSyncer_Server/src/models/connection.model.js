
import mongoose from 'mongoose';

const connectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  connections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
}, { timestamps: true });

const Connection = mongoose.model('Connection', connectionSchema);
export default Connection;
