require("dotenv").config({path: "../.env"})

const PORT = 3000;
const MONGODB_URL = `mongodb+srv://sctrynext:${process.env.MONGO_PASS}@sertifdb.4yewhjo.mongodb.net/NoteDB?retryWrites=true&w=majority&appName=SertifDB`;

module.exports = {
    PORT: PORT,
    MONGODB_URL: MONGODB_URL
}