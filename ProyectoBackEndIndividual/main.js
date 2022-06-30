const express = require("express");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
const cors = require('cors')

require("dotenv").config();
const PORT = process.env.PORT || 3001;

const { typeError }= require('./middlewares/errors');
const { dbConnection } = require("./config/config");

app.use(express.json())

dbConnection()

app.use(cors())

app.use('/posts', require('./routes/posts'));
app.use('/comments', require('./routes/comments'));
app.use('/users', require('./routes/users'));

app.use(typeError)

app.listen(PORT, console.log(`Servidor levantado en el puerto ${PORT}`))