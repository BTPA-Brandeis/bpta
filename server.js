import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import { getAllUsers, getUserByLastName, saveNewUser, deleteUser, updateUser} from './controllers/users'
import { getAllWorkouts, saveNewWorkouts } from './controllers/workouts'
import { getAllPosts } from './controllers/posts'
import { getAllResources } from './controllers/resources'

const app = express()
app.use(express.static('public'))

app.get('/api/users', getAllUsers)
app.get('/api/users/:userLastName', getUserByLastName)

app.get('/api/workouts', getAllWorkouts)

app.get('/api/posts', getAllPosts)

app.get('/api/resources', getAllResources)

app.post('/api/users', bodyParser.json(), saveNewUser)
app.post('/api/workouts', bodyParser.json(), saveNewWorkouts)

app.put('/api/users/:id', bodyParser.json(), updateUser)

app.delete('/api/users/:ID', deleteUser)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})

