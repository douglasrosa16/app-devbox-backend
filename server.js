const express = require('express');
const cors = require('cors');

const data = require('./data');

const app = express();

app.use(cors());

app.get('/users', (req, res) => {
    return res.json(data);
});

app.listen(process.env.PORT || 3000);