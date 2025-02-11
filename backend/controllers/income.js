const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
  const { title, category, description, amount, date } = req.body;
  const income = IncomeSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    if (!title || !category || !description || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (amount <= 0 || typeof amount !== "number") {
      return res
        .status(400)
        .json({ message: "Amount should be a positive number" });
    }
    await income.save();
    return res.status(200).json({ message: "Income added" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getIncome = async (req, res) => {
  const { startDate, endDate } = req.query;
  let filter = {};

  if (startDate && endDate) {
    filter.date = {
      $gte: new Date(startDate),
      $lte: new Date(endDate),
    };
  }

  console.log(filter);

  try {
    const incomes = await IncomeSchema.find(filter).sort({ createdAt: -1 });
    return res.status(200).json(incomes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getTotalIncome = async (req, res) => {
  try {
    const totalIncome = (await IncomeSchema.find())
      .map((x) => x.amount)
      .reduce((partialSum, a) => partialSum + a, 0);
    return res.status(200).json({ totalIncome: totalIncome });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
      return res.status(200).json({ message: "Income deleted" });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
};
