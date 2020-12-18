const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('./db');

class User extends Model {
 
}

User.init({
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

//==============================

class Dog extends Model {
 
}

Dog.init({
Name:{
    type: DataTypes.STRING
},

}, {
sequelize,
modelName: 'Dog',
});


sequelize.sync({alter:true});

module.exports = {User, Dog};

//37:31
