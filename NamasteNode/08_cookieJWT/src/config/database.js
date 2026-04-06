const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

// connect to a clusetr
const connectDb = async () => {
    await mongoose.connect(URI);
};

module.exports = connectDb;
