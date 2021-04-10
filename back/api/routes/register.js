const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get("/", (req, res, next) => {
    User.findAll().then((users) => res.send(users));
});

router.post("/", (req, res, next) => {
    const { email, password } = req.body
    User.create({ email, password })
        .then((user) => {
            res.status(201).send(user);
        })
        .catch((err) => console.log(err));
});
// 1) registra al user
// 2) loggear al señore
// 3) recibir un token
// 4) entrar a la ruta privada x 1/2 del token 





module.exports = router