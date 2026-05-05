const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: Number,
  type: { type: String, enum: ["income", "expense"], default: "expense" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expense", expenseSchema);
