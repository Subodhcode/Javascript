let { MongoClient } = require("mongodb")
// mongoclient ek class hai mongodb ka
// MongoDB ka official driver hai jo Node.js ko database se connect karne deta hai

let url = `mongodb://127.0.0.1:27017`;
// yeh MongoDB server ka connection URL hai
// 127.0.0.1 = localhost (same machine)
// 27017 = default MongoDB port

let client = new MongoClient(url)
// MongoClient ka object banaya
// is object ke through DB se connection hoga

let dbConnection = async () => { // ye ek promis
    // async function hamesha promise return karta hai

    await client.connect() // server
    // MongoDB server se actual connection establish hota hai
    // bina connect kiye DB access nahi kar sakte

    // databse create
    let db = await client.db(process.env.DBNAME)
    // yaha hum specific database select kar rahe hai
    // DBNAME .env file se aa raha hai (secure & dynamic)
    // agar DB exist nahi karta → MongoDB automatically create kar dega

    return db;
    // jaha bhi dbConnection call hoga waha database mil jayega
};

module.exports = { dbConnection }
// is function ko dusri files me use karne ke liye export kiya