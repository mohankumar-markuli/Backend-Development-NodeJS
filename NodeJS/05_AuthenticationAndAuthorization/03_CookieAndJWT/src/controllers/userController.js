const userModel = require("../models/userModel");

const registerUser = async (user) => {
    const dbUser = await userModel.create(user);
    return dbUser;
}

const loginUser = async (email, password) => {
    const body = { email: email }

    const dbUser = await userModel.findOne(body);
    if (!dbUser) throw new Error("User not Found");

    const isPassword = dbUser.password == password;
    if (!isPassword) throw new Error("Password not Match");

    return { status: "ok", user: { id: dbUser.id } };
}

module.exports = {
    registerUser,
    loginUser,
};