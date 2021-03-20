import express from 'express'
// import bodyParser from 'body-parser'
import path from 'path'
import { getAllUsers, getUserByLastName } from './controllers/users'
import { getAllFitnesses } from './controllers/fitnesses'
import { getAllPosts } from './controllers/posts'
import { getAllResources } from './controllers/resources'

const app = express()
app.use(express.static('public'))

app.get('/api/users', getAllUsers)
app.get('/api/users/:userLastName', getUserByLastName)

app.get('/api/fitnesses', getAllFitnesses)

app.get('/api/posts', getAllPosts)

app.get('/api/resources', getAllResources)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})

