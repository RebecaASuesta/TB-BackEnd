const Logger = require('logplease');
const logger = Logger.create('utils');

exports.esPar = (a) => {
    if(a % 2 == 0){
        return logger.info(`El número es par`);
    } else{
        return logger.error(`El número no es par`);
    }
}