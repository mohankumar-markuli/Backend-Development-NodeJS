
const jwt = require("jsonwebtoken");

const validatToken = (req, res, next) => {

    const headers = req.headers || {};

    console.log(headers);
    const token = headers.authorization;

    console.log(token);

    if (!token) {
        res.status(401).send({ message: "Invalid Token" });
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.JWT_KEY);
    } catch (err) {
        console.log(err);
        res.status(401).send({ message: "Invalid User" });
    }
    console.log("Token validated", decodedToken);
    next();
}

module.exports = { validatToken };
