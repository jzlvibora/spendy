const {
  addIncome,
  getIncomes,
  deleteIncome,
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
  .get("/income/all", getIncomes)
  .delete("/income/:id", deleteIncome)
  .post("/expense", addExpense)
  .get("/expense/all", getExpenses)
  .delete("/expense/:id", deleteExpense)
  .post("/category", addCategory)
  .get("/category/all", getCategories)
  .delete("/category/:id", deleteCategory);

module.exports = router;
