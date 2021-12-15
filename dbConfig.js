const { MongoClient } = require('mongodb');

const dbName = "habit-tracker"; // db name
const uri = "mongodb+srv://AATTWM:password123@cluster0.kxhwc.mongodb.net/habit-tracker";

async function initConnection() {
    // Create a new MongoClient
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // Connect the client to the server
    await client.connect();

    return client;
}

async function initDB() {
    const client = await initConnection();
    console.log(`connected to database ${dbName}`);
    return client.db(dbName);
}

module.exports = { 
    initConnection,
    initDB 
};