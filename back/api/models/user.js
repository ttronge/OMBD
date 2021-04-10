const db = require('./db')
const S = require('sequelize');
/* const crypto = require('crypto') */
const bcrypt = require('bcrypt')
class User extends S.Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt)
    }
}

User.init(
    {
        email: {
            type: S.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: S.STRING,
            allowNull: false,
        },
        salt: {
            type: S.STRING
        },
    },


    { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
    return bcrypt
        .genSalt(16)
        .then(salt => {
            user.salt = salt
            return user.hash(user.password, salt)
        })
        .then((hash) => {
            user.password = hash // con esto las password pasa a ser 125d4f13sd54f1s5f4sd3 (encriptada)
        })

})
module.exports = User
/* User.addHook("beforeCreate", (user) => {
    user.salt = crypto.randomBytes(20).toString("hex");
    user.password = user.hashPassword(user.password);
});

User.prototype.hashPassword = function (password) {
    return crypto.createHmac("sha1", this.salt).update(password).digest("hex");
};
User.prototype.ValidatePassword = function (recibPassword) {
    return this.hashPassword(recibPassword) === this.password
} */
