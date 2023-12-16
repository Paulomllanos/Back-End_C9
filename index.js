// Librerias
const express = require('express');
const productRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')
const cors = require('cors')
require('dotenv').config();

// Traemos la conexion de la abse de dtaos al servidor
require('./config/database');

// Instaciamiento de express
const app = express();

//Middleware

//Servidor entiende en POST ---> JSON
app.use(cors()); // aceptamos all origins todos los dominios
app.use(express.json());
// Con esto usamos una router en nuestro servidor
app.use(productRouter);
app.use(userRouter);



// Levantamiento de servidor
app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado en puerto: ${process.env.PORT}`)
})
