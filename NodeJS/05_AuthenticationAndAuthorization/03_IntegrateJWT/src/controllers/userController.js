const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jsw = require("jsonwebtoken");

const SALT_ROUND = 10;
const JWT_KEY = "MySecretKey";

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

    const token = jsw.sign({ id: dbUser.id, role: dbUser.role }, JWT_KEY, { expiresIn: '1h' });

    return { status: "ok", token};
}

module.exports = {
    registerUser,
    loginUser,
};