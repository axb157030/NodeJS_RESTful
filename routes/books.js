const express = require('express')
const router = express.Router();
const Book = require('../models/Book')

// ROUTES

router.get('/', async (req, res) => {
    //res.send("We are on posts")
    try {
        const books = await Book.find()
        res.json(books)
    }
    catch (err) {
        res.json({ message: err })
    }
});

router.post('/', async (req, res) => {
    console.log(req.body)
    const book = new Book({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
    });

    try {
        const savedBook = await book.save()
        res.json(savedBook)
    }
    catch (err) {
        res.json({ message: err })
    }

});

router.get('/:bookId', async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId)
        res.json(book)
    }
    catch (err) {
        res.json({ message: err })
    }
});

    router.delete('/:bookId', async (req, res) => {
        try {
            const removedBook = await Book.remove({ _id: req.params.bookId})
            res.json(removedBook)
        }
        catch (err) {
            res.json({ message: err })
        }

});


router.patch('/:bookId', async (req, res) => {
    try {
        const updatedBook = await Book.updateOne({ _id: req.params.bookId}, {$set: {title: req.body.title, image: req.body.image, description: req.body.description}})
        res.json(updatedBook)
    }
    catch (err) {
        res.json({ message: err })
    }

});

// https://www.youtube.com/watch?v=vjf774RKrLc&t=1279s


module.exports = router;
