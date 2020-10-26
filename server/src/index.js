// Dependencies
const express = require('express');
const cors = require('cors');
const connectDb = require('./config/db');
const app = express()

// Database connection
connectDb();

// Routes
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/posts', postsRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

// listen for requests
app.listen(4000, () => {
    console.log('Server is listening on port 4000')
})

module.exports = app;