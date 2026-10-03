const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("Connected to MongoDB");
}

module.exports = connectDB;