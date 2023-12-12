import User from "../models/User.js";

// User Login.....
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res
      .status(404)
      .json({ error: `Invalid email and password.` });
  }

  res.status(200).json(user);
};

// Export crud methods
export { login };
