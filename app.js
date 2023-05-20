const express = require('express');
const db = require('./database/db.js');
const routes = require('./routes/routes.js');
db.database();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`${PORT}`));