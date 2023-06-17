const sequelize = require('sequelize');
const database = require('../db');

const progammer = database.define('progammer', {
    id: {
        type: sequelize.INTEGER,
        autoIcrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    javascript: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    java: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    pyhton: {
        type: sequelize.BOOLEAN,
        allowNull: true
    },


})
