var sequelize = require("../config/connection");

const Model = Sequelize.Model;
class User extends Model { }
User.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    friendList: {
        type: Sequelize.ARRAY,
        allowNull: false
    },
})