const express = require('express');
const app = express();
const PORT = 3000;
const contact = require('./routes/contact');
const cors = require('cors')

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/contact', contact);

app.listen(PORT, () => {console.log(`App listening on PORT: ${PORT}`)});