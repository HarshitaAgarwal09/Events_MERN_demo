const express = require('express');
const mongoose = require('mongoose');

const app = express();

const config = require('config');

const db = config.get('mongoURI');

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  

//Routes
app.use('/api/events', require('./routes/api/events'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/user'));

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});