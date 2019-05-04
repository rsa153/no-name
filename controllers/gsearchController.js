const axios = require('axios');
const db = require('../models');

const ajax = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

module.exports = {
  findAll: async function(req, res) {
    const { query: params } = req;
    try {
      const results = await ajax.get(
        'https://www.googleapis.com/books/v1/volumes',
        { params }
      );

      // Filter the results from the API request to only return books
      // that have required fields.
      const apiBooks = results.data.items.filter(
        (result) =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
      );

      // Get all books from the database.
      const dbBooks = await db.Book.find();

      // Filter the books we will return to just those entries that are
      // not already in the database.
      const books = apiBooks.filter((apiBook) =>
        dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
      );

      // Send the resulting list of books back as JSON.
      return res.json(books);

    } catch (e) {
      return res.status(400).json(e);
    }
  }};
