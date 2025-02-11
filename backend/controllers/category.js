const CategorySchema = require("../models/CategoryModel");

exports.addCategory = async (req, res) => {
  const { title, description } = req.body;
  const category = CategorySchema({
    title,
    description,
  });
  try {
    if (!title || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await category.save();
    return res.status(200).json({ message: "Category added" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await CategorySchema.find().sort({ title: -1 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  const { id } = req.params;
  CategorySchema.findByIdAndDelete(id)
    .then((category) => {
      res.status(200).json({ message: "Category deleted" });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};
