const {Sequelize, DataTypes, ModeL} = require('sequelize');
const sequelize = require('./db');

class User extends Model{

}

User,init({
firstName:{
    type: DataTypes.STRING
},

lastName:{
    type: DataTypes.STRING
}
}, {
sequelize,
modelName: 'User',
});

sequelize.sync({alter:true});

module.exports = {User};
