const router = require("express").Router();
const User = require("../models/User");

router.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch {
    res.status(400).json({ error: "User exists" });
  }
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.status(400).json({ error: "Invalid" });
  res.json(user);
});

module.exports = router;
