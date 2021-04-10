const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')

router.get("/", (req, res, next) => {
    User.findAll().then((users) => res.send(users));
});

router.post("/", passport.authenticate("local"), (req, res, next) => { // el authenticate es sobre las cookies 
    res.send(req.ser)
        .then()
        .catch(error => console.error(error))
});



module.exports = router