const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const SALT_ROUND = 10;

const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, SALT_ROUND);
    const dbUser = await userModel.create(user);
    return dbUser;
}

const loginUser = async (email, password) => {
    const body = { email: email }

    const dbUser = await userModel.findOne(body);
    if (!dbUser) throw new Error("User not Found");

    // const isPassword = dbUser.password == password;
    const isPassword = bcrypt.compareSync(password, dbUser.password);

    if (!isPassword) throw new Error("Password not Match");

    return { status: "ok", user: { id: dbUser.id } };
}

module.exports = {
    registerUser,
    loginUser,
};