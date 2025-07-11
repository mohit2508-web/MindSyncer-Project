import express from 'express';
import User from '../models/User.js';  // Mongoose model

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { avatar, fullName, email, password, role, skills } = req.body;

    const newUser = new User({ avatar, fullName, email, password, role, skills });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
