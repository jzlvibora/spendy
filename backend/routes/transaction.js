const {
  addIncome,
  getIncome,
  deleteIncome,
  getTotalIncome,
} = require("../controllers/income");
const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expense");
const {
  addCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/category");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello world");
});

router
  .post("/income", addIncome)
  .get("/income", getIncome)
  .get("/income/total",getTotalIncome)
  .delete("/income/:id", deleteIncome)
  .post("/expense", addExpense)
  .get("/expense", getExpenses)
  .delete("/expense/:id", deleteExpense)
  .post("/category", addCategory)
  .get("/category", getCategories)
  .delete("/category/:id", deleteCategory);

module.exports = router;
