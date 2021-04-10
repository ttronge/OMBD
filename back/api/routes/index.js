const express = require('express')
const router = express.Router()
const register = require('./register')
const login = require('./login')
const secret = require('./secret')
const me = require('./me')
const logout = require('./logout')


router.use('/register', register)
router.use('/login', login)
router.use('/secret', secret)
router.use('/logout', logout)
router.use('/me', me)



module.exports = router