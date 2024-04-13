const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    dialect: 'postgres', 
    database: 'postgres', // Can't access the .env file for some reason
    username: 'postgres', // Can't access the .env file for some reason
    password: 'password', // Can't access the .env file for some reason
    host: 'localhost', 
    port: 5432
});

module.exports = sequelize;