const { MongoClient } = require('mongodb');

const dbName = "habit-tracker"; // db name
const uri = process.env.MONGODB_URI;

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

async function closeConnection() {
    if (isConnected) {
        await client.close();
    }
}

function isConnected() {
    return !!client && !!client.topology && client.topology.isConnected()
  }

module.exports = { 
    initConnection,
    initDB,
    closeConnection 
};