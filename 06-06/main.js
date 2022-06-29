const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const { dbConnection } = require("./config/config")

app.use(express.json())

dbConnection()

app.use('/tasks', require('./routes/tasks'))


app.listen(port,() => console.log('Servidor levantado en el puerto '+ port))