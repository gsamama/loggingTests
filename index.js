const express = require('express');
const logger = require('./system/logger');

const app = express();

logger.add(console.log('test'));

app.listen(3000);
