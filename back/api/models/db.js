const s = require("sequelize");
const db = new s("postgres://localhost:5432/omdbtomi", { logging: false });

module.exports = db;

