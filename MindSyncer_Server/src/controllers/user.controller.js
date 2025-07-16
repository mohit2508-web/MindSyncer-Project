import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret_key'; // ⚠ Change in production to process.env.JWT_SECRET

/**
 * Register a new user
 */
export const registerUser = async (req, res) => {
  console.log("👋 Register route hit!");
  console.log("REQ.BODY =>", req.body);

  try {
    const {
      fullName,
      emailAddress,
      password,
      role,
      skills,
      profileImage = "",
      journey = "",
      education,
      achievements,
      socials = {},
      // ⬇ Add any new fields you want here
      // newField
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ emailAddress });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = new User({
      fullName,
      emailAddress,
      password: hashedPassword,
      role,
      skills: skills || [],
      profileImage,
      journey,
      education: education || [],
      achievements: achievements || [],
      socials: {
        github: socials.github || "",
        linkedin: socials.linkedin || "",
        twitter: socials.twitter || "",
        instagram: socials.instagram || "",
        website: socials.website || "",
      },
      // newField
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('🔥 Registration error:', error.message, error.stack);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

/**
 * Login user
 */
export const loginUser = async (req, res) => {
  try {
    const { emailAddress, password } = req.body;

    const user = await User.findOne({ emailAddress });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.emailAddress },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        emailAddress: user.emailAddress,
        role: user.role,
        skills: user.skills,
        profileImage: user.profileImage,
        journey: user.journey,
        education: user.education,
        achievements: user.achievements,
        socials: user.socials,
        // newField: user.newField,
      }
    });
  } catch (error) {
    console.error('🔥 Login error:', error.message, error.stack);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

/**
 * Logout
 */
export const logoutUser = (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
};

/**
 * Get user by ID
 */
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      emailAddress: user.emailAddress,
      role: user.role,
      skills: user.skills,
      profileImage: user.profileImage,
      journey: user.journey,
      education: user.education,
      achievements: user.achievements,
      socials: user.socials,
      // newField: user.newField,
    });
  } catch (error) {
    console.error('🔥 Get user by ID error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

/**
 * Get all users
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, 'fullName role skills profileImage');
    res.status(200).json(users);
  } catch (error) {
    console.error('🔥 Get all users error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

/**
 * Update user
 */
export const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          fullName: req.body.fullName,
          emailAddress: req.body.emailAddress,
          role: req.body.role,
          skills: req.body.skills,
          profileImage: req.body.profileImage,
          journey: req.body.journey,
          education: req.body.education,
          achievements: req.body.achievements,
          socials: {
            github: req.body.socials?.github || "",
            linkedin: req.body.socials?.linkedin || "",
            twitter: req.body.socials?.twitter || "",
            instagram: req.body.socials?.instagram || "",
            website: req.body.socials?.website || "",
          },
          // newField: req.body.newField,
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user: updatedUser });
  } catch (error) {
    console.error("🔥 Update error:", error.message, error.stack);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};