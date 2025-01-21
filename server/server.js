const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routes/auth/auth-routes.js')


//create a database connection 
//u can also create a seperate file  for this and then import it here

//1.create project, 2.create cluster(free,aws)->create deployment
//when clicked btn,model opened with username & Password -->connect to cluster
//here click create database user,choose conection ,mongodb vscode

//network access,cretae IP Address
mongoose.connect('mongodb+srv://vijaykanagaraj999:qCK72W54k8eJPQvG2024@cluster0.bljxf.mongodb.net/')
    .then(() => console.log("MongoDB Connected.."))
    .catch((error) => console.log(error))

const app = express() //1.To create express server we need to create app and import express.
const PORT = process.env.PORT || 5000

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
        ],
        credentials: true
    })
);
app.use(cookieParser())
app.use(express.json())//enable the parsing of incoming requests with JSON payloads

app.use('/api/auth', authRouter)
// /api/auth/register -> run registerUser controller
// /api/auth/login -> run loginUser controller

app.listen(PORT, () => console.log(`Server is now running on ${PORT}`))