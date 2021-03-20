const path = require('path');
const express = require('express');
const db = require('./models'); //Requiring models folder to set up sequelize
const app = express();
const passport = require("./config/passport"); // Requiring passport
const session = require("express-session"); // Requiring session for passport
const PORT = process.env.PORT || 1337;
const getAllUsers = require('./controllers/users');
const getAllFitnesses = require('./controllers/fitnesses');
const getAllPosts = require('./controllers/posts');
const getAllResources = require('./controllers/resources');

// Passport Configs
app.use(session({
	secret: "BPTA",
	resave: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
// Configure body parser for AJAX requests
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());

// Controllers links
app.get('/api/users', getAllUsers)
app.get('/api/fitnesses', getAllFitnesses)
app.get('/api/posts', getAllPosts)
app.get('/api/resources', getAllResources)

//{ force: false } to not overwrite DB each app load
//{ force: true } to overwrite DB each app load
db.sequelize.sync({
	force: false
}).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}`);
	});
});