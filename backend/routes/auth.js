const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// 1. REGISTER API (POST /api/auth/register)
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check karo ki user pehle se exist to nahi karta
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists!" });
    }

    // Naya user create karo
    user = new User({ name, email, password });

    // Password ko hash (encrypt) karo
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Database me save karo
    await user.save();
    res.json({ msg: "User registered successfully! 🎉" });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// 2. LOGIN API (POST /api/auth/login)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check karo user database me hai ya nahi
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials!" });
    }

    // Password match karke dekho
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials!" });
    }

    // Agar sab sahi hai to JWT Token banao
    const payload = { user: { id: user.id } };

    jwt.sign(
  payload,
  process.env.JWT_SECRET || "MohitSecretKey123", // 👈 Agar env file nahi mili, toh ye use kar lo
  { expiresIn: "1h" },
  (err, token) => {
    if (err) throw err;
    res.json({ token }); // Token user ko bhej do
  }
);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;