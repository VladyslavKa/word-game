const express = require('express');
const app = express();

require('./middlewares/01-static').init(app);

app.get('/answers', require('./router/answers').get);

module.exports = app;
