const express = require('express');
const { logger } = require('./middlewares/loggerMiddleware');
const courseRouter = require('./routes/courseRoute');

const app = express(); //instance of express

// Why drivers insted of REST
// can we use REST API for DBs > => yes
// MongoDB in the past used to use REST with Auth layers
// CouchDB, PouchDB

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

app.use(logger);
app.use('/api/v1/courses', courseRouter); // mount router on the path /api/v1/courses

app.get('/', (req, res) => {
    res.send("Domain Page : Hello world!....")
}
);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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

// start the server
app.listen(3000, () => {
    console.log("Express server up and running");
})