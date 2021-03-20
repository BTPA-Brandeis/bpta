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

app.use(express.static('public'))

app.get('/api/users', getAllUsers)

app.get('/api/fitnesses', getAllFitnesses)

app.get('/api/posts', getAllPosts)

app.get('/api/resources', getAllResources)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})

