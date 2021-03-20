import path from 'path'
import express from 'express'
// import bodyParser from 'body-parser'
import { getAllUsers } from './controllers/users'
import { getAllFitnesses } from './controllers/fitnesses'
import { getAllPosts } from './controllers/posts'
import { getAllResources } from './controllers/resources'
const db = require('./models'); //Requiring models folder to set up sequelize
const app = express()
import passport from './config/passport'; // Requiring passport
import session from 'express-session'; // Requiring session for passport
const PORT = process.env.PORT || 1337;

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

app.use(express.static('public'))
app.get('/api/users', getAllUsers)
app.get('/api/fitnesses', getAllFitnesses)
app.get('/api/posts', getAllPosts)
app.get('/api/resources', getAllResources)
app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

//{ force: false } to not overwrite DB each app load
//{ force: true } to overwrite DB each app load
db.sequelize.sync({
	force: false
}).then(() => {
	app.listen(PORT, () => {
		console.log(`Listening on PORT ${PORT}`);
	});
});

