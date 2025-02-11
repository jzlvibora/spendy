const ExpenseSchema = require("../models/ExpenseModel");
const mongoose = require("mongoose");

exports.addExpense = async (req, res) => {
  const { title, category, description, amount, date } = req.body;
  try {
    if (!title || !category || !description || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || typeof amount !== "number") {
      return res
        .status(400)
        .json({ message: "Amount should be a positive number" });
    }
    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    const categoryExists = await mongoose.model("Category").findById(category);
    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    const expense = ExpenseSchema({
      title,
      amount,
      category,
      description,
      date,
    });

    await expense.save();
    return res.status(200).json({ message: "Expense added" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find()
      .populate("category", "title")
      .sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  ExpenseSchema.findByIdAndDelete(id)
    .then((expense) => {
      res.status(200).json({ message: "Expense deleted" });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
