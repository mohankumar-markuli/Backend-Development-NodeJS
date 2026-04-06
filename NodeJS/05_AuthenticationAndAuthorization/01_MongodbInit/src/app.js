require("dotenv").config();

const express = require('express');
const { logger } = require('./middlewares/loggerMiddleware');
const courseRouter = require('./routes/courseRoute');

const app = express(); //instance of express
const PORT = process.eventNames.PORT;

// Why drivers insted of REST
// can we use REST API for DBs > => yes
// MongoDB in the past used to use REST with Auth layers
// CouchDB, PouchDB
 
app.use(logger);
app.use('/api/v1/courses', courseRouter); // mount router on the path /api/v1/courses

const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const URI = process.env.MONGODB_URI;
const client = new MongoClient(URI);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Domain Page : Hello world!....")
}
);


// start the server
app.listen(PORT, () => {
    console.log("Express server up and running");
})