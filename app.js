/* eslint-disable no-unused-vars */
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const { bind } = require('./routes');

const { user, password, domain } = config.get('db');
mongoose
    .connect(
        `mongodb+srv://${user}:${password}@${domain}/zoonosis?retryWrites=true&w=majority`,
        { useUnifiedTopology: true, useNewUrlParser: true },
    );
const { connection } = mongoose;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const { port } = config.get('server');
const app = express();
app.use(express.json());
bind(app);

module.exports = app.listen(port);
