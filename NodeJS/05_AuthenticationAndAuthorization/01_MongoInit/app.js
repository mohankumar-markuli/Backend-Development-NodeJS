const express = require('express');
const {logger} = require('./middlewares/loggerMiddleware');
const courseRouter = require('./routes/courseRoute');

const app = express(); //instance of express

app.use(logger); 
app.use('/api/v1/courses',courseRouter); // mount router on the path /api/v1/courses


app.get('/',(req,res) =>{
    res.send("Domain Page : Hello world!....")
}
);

// start the server
app.listen(3000,() => {
    console.log("Express server up and running");
})