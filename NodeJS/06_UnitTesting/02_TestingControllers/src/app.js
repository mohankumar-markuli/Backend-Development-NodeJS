require('dotenv').config();

const express = require('express');
const { logger } = require('./middlewares/loggerMiddleware');
const courseRouter = require('./routes/courseRoute');
const userRouter = require("./routes/userRoute");

const app = express(); //instance of express
const mangoose = require("mongoose");

const URI = `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@airtribenodejs.nlllbtl.mongodb.net/${process.env.DB_NAME}`;;
const PORT = process.env.PORT;

app.use(logger);

app.use(express.json());
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/users', userRouter);


app.get('/', (req, res) => {
	res.send("Domain Page : Hello world!....")
}
);

// if I have multiple dependencies - pass all the dependencies inside promise.all
// Promise.all([]);
console.log(URI)
mangoose.connect(URI).
	then(() => {
		console.log("Connected to MongoDB");
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log("Express server up and running on port :", PORT);
		});
	}).catch((err) => {

		console.log("Bootstraping Problem : ", err);
	});