const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const userAuth = async (req, res, next) => {
    try {

        const { token } = req.cookies;
        console.log(token);


        if (!token) {
            return res.status(401).send("Plase login");
        }

        //validate the token
        const decodedObj = await jwt.verify(token, process.env.JWT_SECRET_KEY,);

        console.log(decodedObj);
        const { _id } = decodedObj;

        const user = await userModel.findById(_id);
        if (!user) {
            throw new Error("User not found");
        }
        req.user = user;
        next();
    }
    catch (err) {
        console.log(err);
        res.status(401).send({ message: "Invalid User" });
    }
}


module.exports = { userAuth };
