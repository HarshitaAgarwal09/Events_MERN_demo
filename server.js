const express = require('express');
const mongoose = require('mongoose');

const app = express();

const db = require('./config/keys').mongoURI;

app.use(express.json());

//Routes
const events = require('./routes/api/events');
app.use('/api/events', events);

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Database"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});