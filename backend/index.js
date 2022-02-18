import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";

const app = express();
dotenv.config();

conectarDB();


app.use('/',(req, res)=>{
    res.send('hola mundo');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server funcionando en el puerto ${PORT}`)
});