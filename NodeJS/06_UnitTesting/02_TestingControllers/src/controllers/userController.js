const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // ✅ validation (fixes bcrypt error)
        if (!name || !email || !password) {
            throw new Error("All fields are required");
        }

        const hashedPassword = await bcrypt.hash(
            password,
            parseInt(process.env.SALT_ROUNDS)
        );

        const dbUser = await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(200).json({
            message: "User registered successfully",
            data: dbUser
        });

    } catch (err) {
        console.error(new Date().toISOString(), "ERROR:", err.message);
        res.status(400).json({
            message: err.message,
            error: "VALIDATION_ERROR"
        });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ✅ validation
        if (!email || !password) {
            throw new Error("Email and password are required");
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            throw new Error("User not found");
        }

        const isPasswordValid = await user.validatePassword(password);

        if (!isPasswordValid) {
            throw new Error("Invalid credentials");
        }

        const token = jwt.sign(
            { _id: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "1d" }
        );

        res.cookie("token", token);

        res.status(200).json({
            message: "User Logged In Successfully",
            data: user
        });

    } catch (err) {
        console.error(new Date().toISOString(), "ERROR:", err.message);
        res.status(400).json({
            message: err.message,
            error: "VALIDATION_ERROR"
        });
    }
};

module.exports = { registerUser, loginUser };