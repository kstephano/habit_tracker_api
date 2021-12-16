const { MongoClient } = require('mongodb');

const dbName = "habit-tracker"; // db name
const uri = process.env.MONGODB_URI;

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }).connect();   

async function initConnection() {
    // Connect the client to the server
    console.log('connected to mongo');
    await client.connect();
}

async function initDB() {
    console.log(`connected to database ${dbName}`);
    return client.db(dbName);
}

module.exports = { 
    initDB,
    initConnection
};