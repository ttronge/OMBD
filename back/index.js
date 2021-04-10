const express = require("express");
const app = express();
const path = require("path");
const volleyball = require("volleyball");
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session') // guarda sesiones de usuarios loggeados
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const db = require('./api/models/db');
const router = require('./api/routes')
const User = require('./api/models/user')


app.use(bodyParser.json()) // f
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(session({
    secret: 'bootcamp',
    resave: true,
    saveUninitialized: true

}))
app.use(passport.initialize())
app.use(passport.session()) // se vincula con la linea 18
//-----------------------LOCAL STRATEGY-----------------------------------------------------valida si esta bien la session
passport.use(new localStrategy({
    usernameField: 'email',  // esta bloque de codigo dentro del objeto se hace ya que org los params de la funct son username and password
    passwordField: 'password'

}, function (email, password, done) { // con la funcion vemos si esta logeado
    User.findOne({
        where: { email } // me busca el usuario
    })
        .then(user => {
            if (!user) {  // email no encontrado 
                return done(null, false) // primer parametro el error y el segundo si esta la persona esta autenticada
            }
            user.hash(password, user.salt).then(hash => {
                if (hash !== user.password) {
                    return done(null, false) // no es un errror si no que esta mal el password
                }
                return done(null, user) // no hay error y el usuario y si esta bien 
            })
        })
        .catch(done)
}))
//--------------------------SERIAL AND DESSERIAL aca vemos que hagarramos del usuario para ecnontrarlo y tambien vmoes la base 

passport.serializeUser(function (user, done) { // que queremos que guarde, van a ser los parametros 
    done(null, user.id) // guardamos todo en la id 
})
passport.deserializeUser(function (id, done) {
    User.findByPk(id).then(user => { // la buscamos 
        done(null, id)
    }).catch(done)
})




app.use(volleyball);
app.use('/api', router)

app.use("/", express.static(path.join(__dirname, "public")));
app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(404).send(err);
});

db.sync({ force: false }).then(() => {
    app.listen(3000, function (req, res) {
        console.log("Escuchando puerto 3000");
    });
});