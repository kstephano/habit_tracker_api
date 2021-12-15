const { MongoClient } = require('mongodb');

const dbName = "habit-tracker-db"; // db name
const uri = "mongodb+srv://AATTWM:<password>@cluster0.kxhwc.mongodb.net/myFirstDatabase?";

async function initConnection() {
    // Create a new MongoClient
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    // Connect the client to the server
    await client.connect();

    return client;
}

const client = await initConnection();
console.log(`connected to database ${dbName}`);
const db = client.db(dbName);

const db = initDB(); 

db.users.drop();
db.habits.drop();

db.users.insertOne(
    { 
        userEmail: "initialUser@email.com",
        passwordDigest: "password",
        refreshTokens: [],
        userName: "Initial User",
    },
);

db.habits.insertOne(
    {
        userEmail: "initialUser@email.com",
        userName: "Initial User",
        habitName: "Water",
        frequency: 1,
        unit: "cups",
        expectedAmount: 3,
        currentAmount: 0,
        topStreak: 5,
        currentStreak: 3,
        lastLog: "2021-12-11T11:31:21.988Z"
    }
);