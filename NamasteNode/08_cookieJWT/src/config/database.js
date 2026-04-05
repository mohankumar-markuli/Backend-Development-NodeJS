const mongoose = require("mongoose");

// require("dotenv").config();

const uri = process.env.MONGODB_URI;

// connect to a clusetr
const connectDb = async () => {
    await mongoose.connect(uri);
};

module.exports = connectDb;
