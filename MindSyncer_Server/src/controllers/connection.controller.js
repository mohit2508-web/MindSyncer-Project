import User from "../models/user.model.js";

export const addConnection = async (req, res) => {
  const { userId, connectUserId } = req.body;

  if (!userId || !connectUserId) {
    return res.status(400).json({ error: "Both userId and connectUserId are required." });
  }

  try {
    const user = await User.findById(userId);
    const target = await User.findById(connectUserId);

    if (!user || !target) {
      return res.status(404).json({ error: "User not found." });
    }

    // Avoid duplicates
    if (!user.connections.includes(connectUserId)) {
      user.connections.push(connectUserId);
      await user.save();
    }

    res.status(200).json({ success: true, message: "Connected successfully." });
  } catch (err) {
    console.error("Connection error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};

export const getConnections = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId).populate("connections", "fullName emailAddress");
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).json({ connections: user.connections });
  } catch (err) {
    console.error("Get connections error:", err);
    res.status(500).json({ error: "Internal server error." });
  }
};
