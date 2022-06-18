const {createLogger, transports, format, config} = require('winston');

const transports1 = {
  file1: new transports.File({ filename: './logs/info.log' , level: 'info' }),
  file2: new transports.File({ filename: './logs/error.log', level: 'error' }),
  file3: new transports.File({ filename: './logs/warning.log', level: 'warn' }),  
};

format.combine(
  format.colorize(),
  format.json()
);

const logger = createLogger({
  format: format.json(),
  transports: [
    transports1.file1,
    transports1.file2,
    transports1.file3,    
  ]
});

module.exports= logger;