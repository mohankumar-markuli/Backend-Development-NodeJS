// data
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
        trim: true
    },
    rating: {
        type: "Decimal128",
        trim: true,
        min: 0,
        max: 5,
    },
    description: {
        type: "String",
        required: true,
        trim: true
    },
    instructor: {
        type: "String",
        required: true,
        trim: true
    },
    difficulty: {
        type: "String",
        required: true,
        enum: ["Beginner", "Moderate", "Advanced"],
        default: "Beginner",
    },
    price: {
        type: "Decimal128",
        required: true,
        trim: true
    }
});

module.exports = mongoose.model("Course", courseSchema);