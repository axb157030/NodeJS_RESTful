const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
require('dotenv/config')

app.use(bodyParser.json())

//Import Routes
const postRoutes = require('./routes/posts');

app.use('/posts', postRoutes) // url postRoutes start at is http://localhost:3000/posts/

// ROUTES
app.get('/', (req, res) => {
    res.send("We are home")
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,  { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log('connect to DB!')
})
// https://www.youtube.com/watch?v=vjf774RKrLc&t=601s
// https://mongoosejs.com/docs/connections.html
// https://docs.mongodb.com/manual/reference/method/connect/
// https://www.quackit.com/mongodb/tutorial/how_to_access_mongodb.cfm

// How do we start listening to the server
app.listen(300)