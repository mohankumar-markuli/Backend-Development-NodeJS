// step 1: Go to mongoBD
// step 2: create a free M0 cluster
// step 3: create a user
// step 4: get the connection string
// step 5: to access data inside use MBD Compass software
// step 6: MongoDB NodeJS Driver - npm install mongodb 

require("dotenv").config();
const { MongoClient } = require("mongodb");

const URI = process.env.MONGODB_URI;
const client = new MongoClient(URI);

const dbName = 'HelloWorld';

async function main() {

    await client.connect();
    console.log("Connection successful to server");
    const db = client.db(dbName);
    const collection = db.collection('user');

    // writing/inserting data to collection
    const data = {
        "firstname": "Chandrayi",
        "lastname": "Gowda",
        "city": "Hassan"
    }

    const insertResult = await collection.insertMany([data]);
    console.log("Inserted document =>", insertResult);

    // Reading data from collection
    const findResult = await collection.find({}).toArray();
    console.log("Found Document =>", findResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());