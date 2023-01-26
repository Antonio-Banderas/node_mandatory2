import { MongoClient } from "mongodb"
import "dotenv/config"

const url = process.env.MONGO_URL
const dbName = process.env.MONGO_DB_NAME

console.log("DB-url  : " + url);
console.log("DB-Name : " + dbName);

const client = new MongoClient(url)
await client.connect()
const db = client.db(dbName)

export default {
    admins: db.collection("admins"),
    emails: db.collection("emails")
}