const express = require("express");
const mongoose = require("mongoose");
const displayRoutes = require("express-routemap");

const cfg = require('./configs/MongoConfig.cjs');
const { PORT, API_PREFIX } = require("./constants/app.contants");
const userRoutes = require("./routes/users.routes");


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Conectar a MongoDB
//console.log(`mongodb://${cfg.DB_HOST}:${cfg.DB_PORT}/${cfg.DB_NAME}`);
mongoose
    .connect(`mongodb://${cfg.DB_HOST}:${cfg.DB_PORT}/${cfg.DB_NAME}`)
    .then(() => {
        console.log('Conexión a MongoDB establecida');
    }).catch(err => console.log('Error al conectar a MongoDB:', err));

// /api/students
app.use(`/${API_PREFIX}/users`, userRoutes);

app.listen(PORT, () => {
    displayRoutes(app);
    console.log(`UP AND RUNNING ON PORT: ${PORT}`);
});