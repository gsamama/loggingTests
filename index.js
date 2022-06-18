const express = require('express');
const logger = require('./system/logger');

const app = express();

// logger.log('info', 'all good');
// logger.log('error', 'no good');
let dt = new Date();
logger.info(dt.toJSON().toString() + ' >>> all good <<<');

logger.error(dt.toJSON().toString() + '*** no good ***');

logger.warn(dt.toJSON().toString() + '### warn ###')

app.listen(3000);
