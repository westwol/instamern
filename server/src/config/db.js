const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('> Database connected!');
    } catch (error) {
        console.log('Error happened while connecting to database');
        process.exit(1);
    }
}

module.exports = connectDB;