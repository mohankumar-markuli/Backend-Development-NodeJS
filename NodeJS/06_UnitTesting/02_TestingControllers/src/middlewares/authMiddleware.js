const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).send("Please login");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await userModel.findById(decoded._id);

        if (!user) {
            throw new Error("User not found");
        }

        req.user = user;
        next();

    } catch (err) {
        res.status(401).send({ message: "Invalid User" });
    }
};

module.exports = { userAuth };