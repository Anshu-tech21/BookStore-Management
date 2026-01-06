const express = require("express");
const Book = require("../models/book"); // make sure filename is Book.js

const router = express.Router();

// ✅ Add a book
router.post("/", async (req, res) => {
  try {
    const { title, author, price, image } = req.body;

    // basic validation
    if (!title || !author || !price || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const book = new Book({
      title,
      author,
      price,
      image,
    });

    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
