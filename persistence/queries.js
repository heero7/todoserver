const Pool = require('pg').Pool;
const config = require('./config');

const dbPool = new Pool({
    user: process.env.User || config.user,
    host: process.env.HOST || config.host,
    database: process.env.DATABASE || config.database,
    password: process.env.PASSWORD || config.password,
    port: process.env.PORT || config.port,
});

module.exports = {
    dbPool
};