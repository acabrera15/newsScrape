const express = require("express");
const app = express();
const port = process.env.port || 3000;

const routes = require('./routes/routes');

app.use(routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
