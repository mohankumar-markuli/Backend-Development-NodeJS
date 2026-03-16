const express = require('express');

const app = express(); //instance of express

app.get('/',(req,res) =>{
    res.send("Hello world!....")
})

app.listen(3000,() => {
    console.log("Express server up and running");
})