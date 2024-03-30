const dotenv = require('dotenv');
dotenv.config();

//const mongoURI = process.env.MONGO_URI;

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

module.exports = { DB_HOST, DB_PORT, DB_NAME };