const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const SALT_VALUE = parseInt(process.env.SALT_ROUNDS, 10);

const registerUser = async (req, res) => {
    try {
        const user = req.body;
        user.password = await bcrypt.hashSync(user.password, SALT_VALUE);
        const dbUser = await userModel.create(user);

        res.status(200).json({
            "message": `user Logged In Successfully`,
            "data": user
        });
    }

    catch (err) {
        console.error(
            new Date().toISOString(),
            "ERROR: ", err.message,
        );
        res.status(400).json({
            message: err.message,
            error: "VALIDATION_ERROR",
        });
    }
}

async function loginUser(req, res) {
    try {

        const { emailId, password } = req.body;
        const user = await userModel.findOne({ emailId: emailId });

        // const isPasswordValid = await bcrypt.compare(password, user.password);
        //  or u can also make a model level validation for exesting password or any data

        const isPasswordValid = await user.validatePassword(password);
        console.log(user);

        if (isPasswordValid) {

            const token = await jwt.sign(
                { _id: user._id, role: user.role },
                JWT_SECRET_KEY,
                { expiresIn: '7d' }
            );

            console.log(token);

            res.cookie("token", token, {
                expires: new Date(Date.now() + 8 * 3600000),
            });

            res.status(200).json({
                "message": `user Logged In Successfully`,
                "data": user
            });
        }
    }
    catch (err) {
        console.error(
            new Date().toISOString(),
            "ERROR: ", err.message,
        );
        res.status(400).json({
            message: err.message,
            error: "VALIDATION_ERROR",
        });
    }
}

module.exports = {
    registerUser,
    loginUser,
};