const sequelize = require('./sequelize');

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    } finally {
        // Close the database connection
        await sequelize.close();
    }
}

testConnection();