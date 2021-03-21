const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { getAllUsers, getUserByLastName, saveNewUser, deleteUser, updateUser} = require('./controllers/users')
const { getAllWorkouts, saveNewWorkouts } = require('./controllers/workouts')
const { getAllPosts } = require('./controllers/posts')
const { getAllResources } = require('./controllers/resources')

const app = express()
app.use(express.static('public'))

app.get('/api/users', getAllUsers)
app.get('/api/users/:userLastName', getUserByLastName)

app.get('/api/workouts', getAllWorkouts)

app.get('/api/posts', getAllPosts)

app.get('/api/resources', getAllResources)

app.post('/api/users', bodyParser.json(), saveNewUser)
app.post('/api/workouts', bodyParser.json(), saveNewWorkouts)

app.put('/api/users/:ID', bodyParser.json(), updateUser)

app.delete('/api/users/:ID', deleteUser)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})