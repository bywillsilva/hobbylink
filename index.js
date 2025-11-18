const express = require('express');
const app = express();
const port = 3000;
const router = require('./src/router');
const styles_router = require('./src/routes/styles_router');
const scripts_router = require('./src/routes/scripts_router');

app.use('/', router);
app.use('/', styles_router);
app.use('/', scripts_router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 