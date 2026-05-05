const express = require("express");
const cookieParser = require("cookie-parser");

const userRoutes = require("../../src/routes/userRoute");
const courseRoutes = require("../../src/routes/courseRoute");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

module.exports = app;