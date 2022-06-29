const express = require('express');
const app = express();
const PORT = 3000;

const { typeError } = require('./middleware/errors');

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/adoptions', require('./routes/adoptions'));
app.use('/animals', require('./routes/animals'));
app.use('/sizes', require('./routes/sizes'));
app.use('/families', require('./routes/families'));

app.use(typeError)

app.listen(PORT, () => console.log('Servidor levantado en el puerto' + PORT));