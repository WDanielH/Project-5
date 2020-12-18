const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:W@rbear1!@localhost/project5', {logging:false});
module.exports = {sequelize};
