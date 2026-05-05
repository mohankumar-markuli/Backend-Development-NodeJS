const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
        trim: true,
    },
    email: {
        type: "String",
        require: true,
        trim: true,
        unique: true,
    },
    password: {
        type: "String",
        require: true,
    },
    role: {
        type: "String",
        emum: ["admin", "user"],
        default: "user",
    }
});

userSchema.methods.validatePassword = async function (passwordFromUser) {
    const user = this;
    const passwordHash = user.password;

    const isPasswordValid = await bcrypt.compare(passwordFromUser, passwordHash);

    return isPasswordValid;
}

module.exports = mongoose.model("User", userSchema);