const router = require("express").Router();
const Expense = require("../models/Expense");

router.post("/", async (req, res) => {
  const item = new Expense(req.body);
  await item.save();
  res.json(item);
});

router.get("/", async (req, res) => {
  const data = await Expense.find();
  res.json(data);
});

module.exports = router;
