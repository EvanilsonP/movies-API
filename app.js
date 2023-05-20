const express = require('express');
const db = require('./database/db.js');

const app = express();
const PORT = process.env.PORT || 3000;

db.database();

app.listen(PORT, () => console.log(`${PORT}`));